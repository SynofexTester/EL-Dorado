const nodemailer = require('nodemailer');
const formidable = require('formidable');
const fs = require('fs');

// Configure Vercel API behavior (disable built-in body parsing for formidable)
module.exports.config = {
    api: {
        bodyParser: false,
    },
};

module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
        if (err) {
            console.error('Error parsing form:', err);
            return res.status(500).json({ error: 'Error parsing form data' });
        }

        // Extract fields - formidable 3.x returns arrays for fields
        const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
        const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;
        const currency = Array.isArray(fields.currency) ? fields.currency[0] : fields.currency;

        // Extract file
        const file = Array.isArray(files.proof) ? files.proof[0] : files.proof;

        if (!file) {
            return res.status(400).json({ error: 'No payment proof uploaded' });
        }

        try {
            // Configure Transporter
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            // 1. Email to Admin
            const adminMailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER, // Send to self/admin
                subject: `New Order: EL DORADO v1.5 from ${name}`,
                html: `
          <h2>New Order Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Payment Currency:</strong> ${currency}</p>
          <p><strong>Status:</strong> Payment Proof Attached</p>
          <p>Please verify the transaction and send the license files.</p>
        `,
                attachments: [
                    {
                        filename: file.originalFilename,
                        path: file.filepath,
                    },
                ],
            };

            // 2. Email to User (Confirmation)
            const userMailOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: 'Order Received - EL DORADO EA',
                html: `
          <div style="font-family: Arial, sans-serif; color: #333;">
            <h2 style="color: #f59e0b;">Thank you for your order!</h2>
            <p>Hi ${name},</p>
            <p>We have received your payment proof for <strong>EL DORADO v1.5 EA</strong>.</p>
            <p>Our team is currently verifying your transaction. You will receive your license key and download links within the next <strong>24 hours</strong>.</p>
            <br>
            <p><strong>Order Details:</strong></p>
            <ul>
                <li>Amount: $200.00</li>
                <li>Currency: ${currency}</li>
            </ul>
            <br>
            <p>If you have any questions, reply to this email.</p>
            <p>Best regards,<br>EL DORADO Team</p>
          </div>
        `,
            };

            // Send emails
            await transporter.sendMail(adminMailOptions);
            await transporter.sendMail(userMailOptions);

            return res.status(200).json({ success: true, message: 'Emails sent successfully' });

        } catch (error) {
            console.error('Email error:', error);
            return res.status(500).json({ error: 'Failed to send emails', details: error.message });
        }
    });
}
