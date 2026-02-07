import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { ArrowLeft, Wallet, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Checkout = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        currency: ''
    });
    const [showAddress, setShowAddress] = useState(false);

    const getWalletAddress = (currency) => {
        switch (currency) {
            case 'BTC': return process.env.REACT_APP_BTC_WALLET;
            case 'USDT_TRC20': return process.env.REACT_APP_USDT_TRC20_WALLET;
            case 'ETH_ERC20': return process.env.REACT_APP_ETH_ERC20_WALLET;
            default: return '';
        }
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        toast.success("Address copied to clipboard!");
    };

    const handlePayment = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.currency) {
            toast.error("Please fill in all details");
            return;
        }

        // Setup for actual crypto payment integration
        // For now, showcase the selection
        toast.success(`Proceeding to pay with ${formData.currency}`);

        // Here you would typically redirect to a specific wallet address page 
        // or show a QR code modal based on the selected currency
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                <Button
                    variant="ghost"
                    onClick={() => navigate('/buy')}
                    className="mb-6 text-slate-400 hover:text-white"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                </Button>

                <Card className="bg-slate-900 border-amber-500/20 shadow-2xl shadow-amber-500/10">
                    <CardHeader className="text-center border-b border-amber-500/10 pb-6">
                        <Badge className="mb-4 bg-amber-500/20 text-amber-400 border-amber-500/30 w-fit mx-auto">
                            Secure Checkout
                        </Badge>
                        <CardTitle className="text-2xl font-bold text-white mb-2">Complete Your Purchase</CardTitle>
                        <CardDescription className="text-slate-400">
                            Enter your details to receive the product
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                        <form onSubmit={handlePayment} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-slate-200">Full Name</Label>
                                <Input
                                    id="name"
                                    placeholder="John Doe"
                                    className="bg-slate-950 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-slate-200">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="bg-slate-950 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                                <p className="text-xs text-slate-500">Your license and files will be sent here.</p>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-slate-200">Select Payment Currency</Label>
                                <Select
                                    onValueChange={(value) => setFormData({ ...formData, currency: value })}
                                >
                                    <SelectTrigger className="bg-slate-950 border-slate-700 text-white hover:border-amber-500 focus:ring-amber-500">
                                        <SelectValue placeholder="Choose Crypto" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-900 border-slate-700 text-white">
                                        <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
                                        <SelectItem value="USDT_TRC20">USDT (TRC20)</SelectItem>
                                        <SelectItem value="ETH_ERC20">Ethereum (ERC20)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-slate-300">Product:</span>
                                    <span className="text-white font-medium">EL DORADO v1.5</span>
                                </div>
                                <div className="flex justify-between items-center text-lg font-bold">
                                    <span className="text-slate-300">Total:</span>
                                    <span className="text-amber-400">$200.00</span>
                                </div>
                            </div>

                            {!showAddress ? (
                                <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-6 text-lg">
                                    <Wallet className="w-5 h-5 mr-2" />
                                    Proceed to Payment
                                </Button>
                            ) : (
                                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
                                    <div className="bg-slate-950 border border-amber-500/30 rounded-lg p-4">
                                        <div className="text-sm text-slate-400 mb-2">Send precisely <span className="text-white font-bold">$200</span> worth of {formData.currency} to:</div>
                                        <div className="flex items-center gap-2 bg-slate-900 p-3 rounded border border-slate-700">
                                            <code className="text-amber-400 text-sm break-all flex-1">
                                                {getWalletAddress(formData.currency) || "Address not configured in .env"}
                                            </code>
                                            <Button
                                                size="sm"
                                                variant="ghost"
                                                className="h-8 w-8 p-0"
                                                onClick={() => handleCopy(getWalletAddress(formData.currency))}
                                            >
                                                <CheckCircle2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="text-center text-sm text-slate-400">
                                        After payment, please send the transaction hash to support@example.com for activation.
                                    </div>

                                    <Button
                                        variant="outline"
                                        className="w-full border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800"
                                        onClick={() => setShowAddress(false)}
                                    >
                                        Back to details
                                    </Button>
                                </div>
                            )}
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Checkout;
