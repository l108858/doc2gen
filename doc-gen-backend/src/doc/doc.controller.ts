import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { DocService } from './doc.service';
import * as path from 'path';
import * as fs from 'fs';

@Controller('doc')
export class DocController {
    constructor(private readonly docService: DocService) {}

    @Get("pdf")
    async downloadPdf(@Res() res: Response) {
        try {
            await this.docService.getDoc(); 
            const filePath = path.join(__dirname, '..', 'generated-docs', 'output.pdf');

            if (!fs.existsSync(filePath)) {
                return res.status(HttpStatus.NOT_FOUND).send('PDF not found');
            }

            res.set({
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename=output.pdf',
            });

            const fileStream = fs.createReadStream(filePath);
            fileStream.pipe(res);
        } catch (error) {
            console.error('Error sending PDF:', error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Failed to generate or send PDF');
        }
    }


    @Get("docx")
    async downloadDocx(@Res() res: Response) {
        try {
            await this.docService.getDoc(); 
            const filePath = path.join(__dirname, '..', 'generated-docs', 'temp.docx');

            if (!fs.existsSync(filePath)) {
                return res.status(HttpStatus.NOT_FOUND).send('PDF not found');
            }

            res.set({
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename=temp.docx',
            });

            const fileStream = fs.createReadStream(filePath);
            fileStream.pipe(res);
        } catch (error) {
            console.error('Error sending PDF:', error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Failed to generate or send PDF');
        }
    }
}
