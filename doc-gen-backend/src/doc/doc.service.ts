import { Injectable } from '@nestjs/common';
import { Packer } from 'docx';
import * as fs from 'fs';
import * as path from 'path';
import { convert } from 'docx2pdf-converter'; 
import generateDoc2 from './doc2';

const DOCS_DIR = path.join(__dirname, '..', 'generated-docs');


const ensureDirectoryExists = (dirPath: string) => {
     if (!fs.existsSync(dirPath)) {
         fs.mkdirSync(dirPath, { recursive: true });
     }
};

const generateDoc = async () => {
    try {
        ensureDirectoryExists(DOCS_DIR);
        const docPath = path.join(DOCS_DIR, 'temp.docx');
        const buffer = await Packer.toBuffer(generateDoc2);
        fs.writeFileSync(docPath, buffer);
        console.log('DOCX file generated');
        return docPath;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const convertToPdf = (inputPath: string): string => {
    try {
        const outputPath = path.join(DOCS_DIR, 'output.pdf');
        convert(inputPath, outputPath);
        console.log('PDF file generated');
        return outputPath;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

@Injectable()
export class DocService {
    async getDoc(){
        try {
            const docPath = await generateDoc();
            const pdfPath = convertToPdf(docPath);
            return `PDF generated successfully`;
        } catch (error) {
            console.error(error);
            throw new Error('Failed to generate documents.');
        }
    }
}
