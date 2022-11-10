import html2canvas from "html2canvas";
import jsPDF from "jspdf";


export class A4Pdf {
  private readonly A4_HEIGHT_PX : number = 842;
  private readonly A4_WIDTH_PX : number = 595;
  private readonly MEASUREMENT_UNIT_PX : "px" = 'px';
  private readonly ORIENTATION_PORTRAIT : "p" = 'p';
  private readonly QUALITY: 1|2|3|4 = 4;
  private readonly IMAGE_TYPE : string = "image/jpeg"

  pdfBuilder: jsPDF;
  fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
    this.pdfBuilder = new jsPDF(this.ORIENTATION_PORTRAIT, this.MEASUREMENT_UNIT_PX, [this.A4_WIDTH_PX, this.A4_HEIGHT_PX]);
  }


  async withPages(pages: HTMLElement[]){
      let canvases: HTMLCanvasElement[] = await this.pagesToCanvas(pages);

      canvases.forEach( canvas => {
        let image = canvas.toDataURL(this.IMAGE_TYPE, 1.0);
        this.pdfBuilder.addImage(image, 0, 0, this.A4_WIDTH_PX, this.A4_HEIGHT_PX);
        this.pdfBuilder.addPage();
      });
      this.pdfBuilder.deletePage(canvases.length + 1);
  }

  private async pagesToCanvas(pages: HTMLElement[]){
    return await Promise.all(pages.map( page => this.pageToCanvas(page)));
  }

  private pageToCanvas(page: HTMLElement) : Promise<HTMLCanvasElement> {
    return html2canvas(page, {
      useCORS: true,
      logging:true,
      allowTaint: false,
      windowWidth: this.A4_WIDTH_PX,
      windowHeight: this.A4_HEIGHT_PX,
      scale: this.QUALITY,
    })
  }

  public download() {
    this.pdfBuilder.save(this.fileName);
  }
}
