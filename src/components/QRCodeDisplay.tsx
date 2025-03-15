
import React, { useState, useEffect } from 'react';
import { QrCode, Download, Copy, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type QRCodeDisplayProps = {
  value: string;
  size?: number;
  className?: string;
  downloadable?: boolean;
  copyable?: boolean;
  label?: string;
  description?: string;
};

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({
  value,
  size = 200,
  className,
  downloadable = true,
  copyable = true,
  label,
  description,
}) => {
  const [copied, setCopied] = useState(false);
  
  // This is just a placeholder since we don't have a QR code generation library yet
  // In a real implementation, we would use a library like qrcode.react
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(value)}`;
  
  const handleCopyClick = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };
  
  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.download = `qrcode-${label ? label.toLowerCase().replace(/\s+/g, '-') : 'download'}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className={cn(
      "flex flex-col items-center p-6 rounded-xl border bg-card",
      className
    )}>
      {label && (
        <h3 className="font-medium text-lg mb-3 text-center">{label}</h3>
      )}
      
      <div className="relative rounded-lg overflow-hidden bg-white p-3 border shadow-sm mb-4">
        <img 
          src={qrCodeUrl}
          alt="QR Code"
          width={size}
          height={size}
          className="max-w-full h-auto"
        />
      </div>
      
      {description && (
        <p className="text-sm text-muted-foreground text-center mb-4">{description}</p>
      )}
      
      <div className="flex gap-2 mt-2">
        {copyable && (
          <Button 
            variant="outline" 
            size="sm" 
            className={cn(
              "gap-2 transition-all",
              copied && "bg-green-50 text-green-600 border-green-200"
            )}
            onClick={handleCopyClick}
          >
            {copied ? (
              <>
                <CheckCircle2 className="h-4 w-4" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy Value
              </>
            )}
          </Button>
        )}
        
        {downloadable && (
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-2"
            onClick={handleDownloadClick}
          >
            <Download className="h-4 w-4" />
            Download
          </Button>
        )}
      </div>
    </div>
  );
};

export default QRCodeDisplay;
