import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mockProducts } from '@/lib/mock-data';
import { Download } from 'lucide-react';

const contracts = [
  {
    id: "CTR-001",
    product: mockProducts[0],
    vendor: "Halal Vendor Jaya",
    price: 12000000,
    unit: "ton",
    monthly_delivery: 0.5,
    status: "active",
    start_date: "2024-01-01",
    end_date: "2024-12-31"
  },
  {
    id: "CTR-002",
    product: mockProducts[1],
    vendor: "Sumber Pangan Barokah",
    price: 25000000,
    unit: "ton",
    monthly_delivery: 0.1,
    status: "expired",
    start_date: "2023-01-01",
    end_date: "2023-12-31"
  }
];

export default function ContractsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Kontrak Pembelian Saya</CardTitle>
        <CardDescription>Kelola dan pantau semua kontrak bahan pokok Anda.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Produk</TableHead>
              <TableHead>Vendor</TableHead>
              <TableHead>Harga Kontrak</TableHead>
              <TableHead>Pengiriman Bulanan</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contracts.map((contract) => (
              <TableRow key={contract.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-3">
                    <Image
                      src={contract.product.imageUrl}
                      alt={contract.product.name}
                      width={64}
                      height={48}
                      className="rounded-md object-cover"
                      data-ai-hint={contract.product.imageHint}
                    />
                    <div>
                      <div>{contract.product.name.split(" Kontrak")[0]}</div>
                      <div className="text-xs text-muted-foreground">{contract.id}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{contract.vendor}</TableCell>
                <TableCell>
                  {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(contract.price)} / {contract.unit}
                </TableCell>
                <TableCell>{contract.monthly_delivery} {contract.unit}</TableCell>
                <TableCell>
                  <Badge variant={contract.status === 'active' ? 'default' : 'outline'}>
                    {contract.status === 'active' ? 'Aktif' : 'Berakhir'}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Download className="w-4 h-4" />
                    <span className="sr-only">Download Kontrak</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
