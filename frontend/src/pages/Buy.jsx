import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle2, Shield, Wallet, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Buy = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                <Button
                    variant="ghost"
                    onClick={() => navigate('/')}
                    className="mb-6 text-slate-400 hover:text-white"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Button>

                <Card className="bg-slate-900 border-amber-500/20 shadow-2xl shadow-amber-500/10">
                    <CardHeader className="text-center border-b border-amber-500/10 pb-8">
                        <Badge className="mb-4 bg-amber-500/20 text-amber-400 border-amber-500/30 w-fit mx-auto">
                            Lifetime Access
                        </Badge>
                        <CardTitle className="text-3xl font-bold text-white mb-2">EL DORADO EA</CardTitle>
                        <div className="flex items-center justify-center gap-2">
                            <span className="text-4xl font-bold text-amber-400">$200</span>
                            <span className="text-slate-400">USD</span>
                        </div>
                    </CardHeader>
                    <CardContent className="pt-8 space-y-6">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-slate-300">
                                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                                <span>Full v1.5 Expert Advisor</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                                <span>Optimized .set Files</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                                <span>Lifetime Updates & Support</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <Shield className="w-5 h-5 text-green-500 shrink-0" />
                                <span>Secure Payment via Crypto</span>
                            </div>
                        </div>

                        <Button
                            className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-6 text-lg"
                            onClick={() => navigate('/checkout')}
                        >
                            <Wallet className="w-5 h-5 mr-2" />
                            Pay with Crypto
                        </Button>

                        <p className="text-center text-xs text-slate-500">
                            Secured by Blockchain. 30-day money-back guarantee.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Buy;
