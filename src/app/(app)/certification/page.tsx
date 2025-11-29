import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Circle, FileText, Loader2, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const timelineSteps = [
  { name: "Konsultasi", status: "completed", date: "11 Mei 2024" },
  { name: "Audit Lapangan", status: "completed", date: "25 Mei 2024" },
  { name: "Pengujian Lab", status: "processing", date: "Sedang berlangsung" },
  { name: "Rekomendasi MUI", status: "pending", date: "Menunggu" },
  { name: "Sertifikat Diterbitkan", status: "pending", date: "Menunggu" },
];

const documents = [
    { name: "Nomor Induk Berusaha (NIB)", uploaded: true },
    { name: "PIRT", uploaded: true },
    { name: "Komposisi Bahan", uploaded: false, requiresRevision: true },
    { name: "Proses Produksi Halal (PPH)", uploaded: true },
];

export default function CertificationPage() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Timeline Progres Sertifikasi</CardTitle>
            <CardDescription>Warung Nasi Uduk Ibu Siti</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative pl-6">
              {/* Vertical line */}
              <div className="absolute left-9 top-1 bottom-1 w-0.5 bg-border"></div>

              {timelineSteps.map((step, index) => (
                <div key={index} className="relative flex items-start mb-8">
                  <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-background ring-4 ring-background">
                    {step.status === "completed" && <CheckCircle2 className="w-8 h-8 text-primary" />}
                    {step.status === "processing" && <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />}
                    {step.status === "pending" && <Circle className="w-8 h-8 text-border" />}
                  </div>
                  <div className="ml-6">
                    <h3 className="font-semibold font-headline">{step.name}</h3>
                    <p className="text-sm text-muted-foreground">{step.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-1 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Checklist Dokumen</CardTitle>
            <CardDescription>Pastikan semua dokumen terunggah.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm">{doc.name}</span>
                    </div>
                    {doc.uploaded && !doc.requiresRevision && <CheckCircle2 className="w-5 h-5 text-primary" />}
                    {!doc.uploaded && !doc.requiresRevision && <Button variant="outline" size="sm">Upload</Button>}
                    {doc.requiresRevision && <span className="text-xs font-medium text-destructive">Revisi</span>}
                </div>
            ))}
            <Separator />
            <Button className="w-full">Upload Dokumen Revisi</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Hubungi Vendor</CardTitle>
            <CardDescription>Halal Vendor Jaya</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Button variant="outline" className="w-full">
                <MessageSquare className="w-4 h-4 mr-2"/> Chat via Aplikasi
            </Button>
             <Button variant="outline" className="w-full">
                <Mail className="w-4 h-4 mr-2"/> Kirim Email
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
