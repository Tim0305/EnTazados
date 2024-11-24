import { Injectable } from '@angular/core';
import { Product } from '../../models/Product.model';
import { Usuario } from '../../models/Usuario.model';

@Injectable({
  providedIn: 'root',
})
export class ReceiptService {
  generateReceipt(items: Product[], fecha:Date, subTotal:number, envio:number, user:Usuario) {
    let iva = subTotal * .16;
    let receiptContent = `<?xml version="1.0" encoding="UTF-8" ?> \n`;
    receiptContent += ` <fechaprueba>${fecha}</fechaprueba>\n`;
    receiptContent +=
      `<recibo>\n <idRecibo>1</idRecibo>  <fecha>${fecha}</fecha>\n <vendedor>EnTazados</vendedor> <idCliente>${user.id}</idCliente>\n  <nombreCliente>${user.nombre}</nombreCliente>\n  <pedido>`;
    items.forEach((item) => {
      receiptContent += `   <producto>\n      <idProducto>${item.id}</idProducto>\n     <nombreProducto>${item.nombre}</nombreProducto>\n     <precio>${item.precio}</precio>\n   </producto>\n`;
    });
    receiptContent += ' </pedido>\n';
    receiptContent += ` <subTotal>${subTotal}</subTotal>\n`;
    receiptContent += ` <iva>${iva}</iva>\n`;
    receiptContent += ` <envio>${envio}</envio>\n`;
    receiptContent += ` <total>${subTotal + iva + envio}</total>\n`;
    receiptContent += '</recibo>';
    this.downloadFile(receiptContent, 'receipt.xml');
  }

  private downloadFile(content: string, filename: string) {
    const blob = new Blob([content], { type: 'text/xml' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}



