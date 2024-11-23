import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";

export default function RainData() {
    const data = [
        { city: 'São Paulo', rain: '12mm', date: '23/11/2024' },
        { city: 'Rio de Janeiro', rain: '8mm', date: '23/11/2024' },
        { city: 'Belo Horizonte', rain: '15mm', date: '23/11/2024' },
    ];

    return (
        <Card className="mb-8 w-full max-w-4xl bg-white">
            <CardHeader>
                <CardTitle>Dados Recentes de Chuvas</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {data.map((item, index) => (
                        <li key={index} className="flex justify-between text-sm">
                            <span className="font-medium">{item.city}</span>
                            <span>{item.rain}</span>
                            <span className="text-muted-foreground">{item.date}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
