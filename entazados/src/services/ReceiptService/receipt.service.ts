import { Injectable } from '@angular/core';
import { Product } from '../../models/Product.model';
import { Usuario } from '../../models/Usuario.model';
import { Pedido } from '../../models/Pedido.model';

@Injectable({
  providedIn: 'root',
})
export class ReceiptService {
  generateReceipt(pedido: Pedido) {
    let receiptContent = `<?xml version="1.0" encoding="UTF-8" ?> \n`;
    receiptContent += `<recibo>\n <idRecibo>${pedido.idPedido}</idRecibo>  <fecha>${pedido.fechaCompra}</fecha>\n <vendedor>EnTazados</vendedor> <idCliente>${pedido.usuario.id}</idCliente>\n  <nombreCliente>${pedido.usuario.nombre} ${pedido.usuario.apellidos}</nombreCliente>\n  <pedido>`;
    pedido.tazas.forEach((t) => {
      receiptContent += `   <producto>\n      <idProducto>${t.id}</idProducto>\n     <nombreProducto>${t.nombre}</nombreProducto>\n     <precio>${t.precio}</precio>\n   </producto>\n`;
    });
    receiptContent += ' </pedido>\n';
    receiptContent += ` <subTotal>${pedido.total}</subTotal>\n`;
    receiptContent += ` <iva>${pedido.iva}</iva>\n`;
    receiptContent += ` <envio>100</envio>\n`;
    receiptContent += ` <total>${pedido.total + pedido.iva + 100}</total>\n`;
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
