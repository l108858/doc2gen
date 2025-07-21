import { Paragraph, Table, TableCell, TableRow, TextRun,WidthType } from "docx";

const table2 = new Table({
    rows:[
        new TableRow({
            children:[

                new TableCell({
                    children:[
                        new Paragraph({
                            children:[
                                new TextRun({text:"Risk Score Range",bold:true})
                            ]
                        })
                    ]
                }),
                new TableCell({
                    children:[
                        new Paragraph({
                            children:[
                                new TextRun({text:"Risk Category",bold:true})
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
                        new Paragraph({text:"1.0 to 3.2"})
                    ]
                }),
                new TableCell({
                    children:[
                        new Paragraph({text:"Low"})
                    ]
                }),
            ]
        }),
        new TableRow({
            children:[
                new TableCell({
                    children:[
                        new Paragraph({text:"3.3 to 5.1"})
                    ]
                }),
                new TableCell({
                    children:[
                        new Paragraph({text:"Medium"})
                    ]
                }),
            ]
        }),
        new TableRow({
            children:[
                new TableCell({
                    children:[
                        new Paragraph({text:"5.2 to 7.2"})
                    ]
                }),
                new TableCell({
                    children:[
                        new Paragraph({text:"High"})
                    ]
                }),
            ]
        }),

    ],
    width: {
        size: 4000,
        type: WidthType.DXA,
    },
    margins: {
        top: 50,
        bottom: 50,
        left: 100,
    },
    alignment:"center"
})

export default table2