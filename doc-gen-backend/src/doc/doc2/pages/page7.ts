import { Paragraph,TextRun } from "docx"

const page7 = {


    children:[
        new Paragraph({
            children:[
                new TextRun({
                    text:'process8. Table 1 summarizes the scoring criteria for extractables and leachables applied to each of the consumables utilized in the manufacturing of Mounjaro drug product in B100 PFS3. Table 2 details the risk category applied for each risk score range.',size:20
                })
            ],
            spacing:{after:200}
        }),
        new Paragraph({
            children:[
                new TextRun({
                    text:'All product contact consumables used in the manufacturing of Mounjaro drug product in B100 PFS3 have been evaluated and results are detailed in Table 3 for the formulation and holding vessels and associate tubing and fittings, and in Table 4 for all other product contact materials.',size:20
                })
            ],
            spacing:{after:200}
        }),
        new Paragraph({
            children:[
                new TextRun({
                    text:'As per TSMS-SOP-021-PPCM ',size:20
                }),
                new TextRun({
                    text:"Assessment and Qualification of Parenteral Product Contact Materials (PPCMs)",size:20,
                    italics:true
                }),
                new TextRun({
                    text:", materials which are scored as low risk require documentation of material of composition, quality and safety information, compendial and extractable test results, etc. and may be justified based upon similarity to medium or high risk materials already in use with appropriate compatibility/leachable studies available. Functionality testing and resistance to Clean Out of Place/Sanitize Out of Place (COP/SOP) operations is also required. Materials which score medium risk require similar documentation to low risk materials plus compatibility testing for impact on product and material. Materials which score high risk require similar documentation and testing as medium risk materials with the additional requirement for leachable and particulate testing.",
                    size:20
                }),
            ],
            spacing:{after:200}
        }),
        new Paragraph({
            children:[
                new TextRun({
                    text:'All of the consumable items used in the Mounjaro drug product B100 PFS3 manufacturing process were determined to be low risk for leachable contribution to the process with the exception of the holding vessels, both of which are medium risk. All of these consumable items have USP <88> Class VI certification and extractable studies have been conducted for most materials including filters, holding vessels, tubing and connectors.',size:20
                })
            ],
            spacing:{after:200}
        }),
    ]

}
export default page7