import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { CheckCircle2, Home, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center">
                <Card className="bg-slate-900 border-amber-500/20 shadow-2xl shadow-green-500/10">
                    <CardHeader className="pb-2">
                        <div className="mx-auto w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-500">
                            <CheckCircle2 className="w-10 h-10 text-green-500" />
                        </div>
                        <CardTitle className="text-3xl font-bold text-white mb-2">Order Submitted!</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 pt-4">
                        <div className="space-y-4 text-slate-300">
                            <p className="text-lg">
                                Thank you for your purchase. We have received your payment proof.
                            </p>

                            <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800 space-y-3">
                                <div className="flex items-start gap-3 text-left">
                                    <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                    <p className="text-sm">
                                        You will receive a confirmation message on your email shortly.
                                    </p>
                                </div>
                                <div className="flex items-start gap-3 text-left">
                                    <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                    <p className="text-sm">
                                        Your order (License & Files) will be delivered within <span className="text-white font-bold">24 hours</span> after verification.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Button
                            className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-6 text-lg"
                            onClick={() => navigate('/')}
                        >
                            <Home className="w-5 h-5 mr-2" />
                            Return to Home
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default ThankYou;
