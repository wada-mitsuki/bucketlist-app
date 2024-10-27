// components/QrCodeGenerator.js
import { QRCodeSVG } from 'qrcode.react';

import { Button } from '@/components/shadcn-ui/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/shadcn-ui/ui/dialog';

interface QrCodeGeneratorProps {
  value: string;
}

const QrCodeGenerator: React.FC<QrCodeGeneratorProps> = ({ value }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'secondary'}>QRコードを表示する</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>自分のバケットリストを共有しよう！</DialogTitle>
          <DialogDescription>話のネタになるぞ！</DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center">
          <QRCodeSVG value={value} size={128} level="H" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QrCodeGenerator;
