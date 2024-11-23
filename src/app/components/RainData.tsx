import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table";

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
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Cidade</TableHead>
                            <TableHead>Chuva</TableHead>
                            <TableHead>Data</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{item.city}</TableCell>
                                <TableCell>{item.rain}</TableCell>
                                <TableCell>{item.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}