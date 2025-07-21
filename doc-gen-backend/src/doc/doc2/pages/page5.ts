import { Paragraph,TextRun } from "docx";

export const page5 = {

    children:[
        new Paragraph({
            children:[
                new TextRun({text:'The following are out of scope for extractable as potential leachables risk assessment as these process contact materials are deemed not to represent a risk to patient safety:'})
            ],
            spacing:{after:200}
        }),
        new Paragraph({
            children:[
                new TextRun({text:"Non-product contact consumables e.g. consumables contacting process waste streams/utility systems"})
            ],
            bullet:{level:0}
        }),
        new Paragraph({
            children:[
                new TextRun({text:"Process contact materials that are considered non-reactive e.g. 316L stainless steel, ceramics or pharmaceutical-grade glass."})
            ],
            bullet:{level:0}
        }),
        new Paragraph({
            children:[
                new TextRun({text:"Pre-processing activities (e.g., flushing, cleaning in place (CIP), steaming in place (SIP))"})
            ],
            bullet:{level:0}
        }),
        new Paragraph({
            children:[
                new TextRun({text:"Small manufacturing components that meet the requirements for default Low risk per LQP-230-8 (e.g., individual component with lowest dilution ratio or assembly component with surface area <0.1% of total assembly)"})
            ],
            bullet:{level:0}
        })
    ]
}