import { Paragraph, Table, TableCell, TableRow, TextRun ,WidthType} from "docx";
import  { constants } from "../static/const";

const table4 = new Table({

    rows:[

        new TableRow({

            children:[
                new TableCell({
                    children:[
                        new Paragraph({
                            children:[
                                new TextRun({text:"Version",bold:true})
                            ]
                        })
                    ]
                }),
                new TableCell({
                    children:[
                        new Paragraph({
                            children:[
                                new TextRun({text:"Summary of Revision",bold:true})
                            ]
                        })
                    ]
                }),
                new TableCell({
                    children:[
                        new Paragraph({
                            children:[
                                new TextRun({text:"Section No/Page No. or Change number",bold:true})
                            ]
                        })
                    ]
                }),
            ]
        }),
        new TableRow({

            children:[
                new TableCell({
                    children:[
                        new Paragraph({
                            children:[
                                new TextRun({text:"1"})
                            ]
                        })
                    ]
                }),
                new TableCell({
                    children:[
                        new Paragraph({
                            children:[
                                new TextRun({text:"Initial Document"})
                            ]
                        })
                    ]
                }),
                new TableCell({
                    children:[
                        new Paragraph({
                            children:[
                                new TextRun(constants.fillInPrompt)
                            ]
                        })
                    ]
                }),
            ]
        }),
    ],
    width: {
        size: 10000,
        type: WidthType.DXA,
    },
    margins: {
        top: 50,
        bottom: 50,
        left: 100,
    },
    alignment: "center",

})

export default table4