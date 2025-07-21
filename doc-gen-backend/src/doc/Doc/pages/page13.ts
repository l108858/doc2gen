import { Paragraph, Footer, TextRun, PageNumber } from "docx";


const page13 =         {
            footers: {
                default: new Footer({
                children:[
                    new Paragraph({
                        children:[new TextRun({children:["     Proprietary & Confidential – Eli Lilly & Company		            Page ",PageNumber.CURRENT," of ",PageNumber.TOTAL_PAGES]})],
                        alignment:"center"
                    })
                ]
            })
            },
            children:[
                new Paragraph({
                    children:[new TextRun({text:"AET Description ",size:24,bold:true,color:"000000"})],
                    spacing:{
                        after:200
                    }
                }),
                new Paragraph({
                    children:[new TextRun({text:"The analytical evaluation threshold (AET) for organic chemical entities is defined as the concentration above which peaks (extractables) need to be identified, quantified, and toxicologically assessed.  The AET is derived by a toxicologist from the safety concern threshold (SCT) which is the threshold at or below which a leachable would have a dose so low as to present negligible safety concerns from carcinogenic and non-carcinogenic toxic effects.  The AET is derived using an appropriate SCT, that is based on the route of administration, dosing volume, dosing regimen, and treatment indication.  The current regimen for _drug_product_ is a subcutaneous weekly dose, which is the same regime (weekly dose) that is planned to be applied for the _drug_product_ injection.   ",size:24})],
                    spacing:{
                        after:200
                    }
                }),
                new Paragraph({
                    children:[new TextRun({text:"For a parenteral product dosed weekly, an SCT of _SCT_ in the AET calculation is appropriate. A _SCT_ was derived to protect for potential carcinogenic and non-carcinogenic effects as described below. ",size:24})],
                    spacing:{
                        after:200
                    }
                }),
                new Paragraph({
                    children:[new TextRun({text:"ICH M7 guidance on DNA reactive impurities maintains that cancer risk of a continuous low dose over a lifetime would be equivalent to the cancer risk associated with an identical cumulative exposure averaged over a shorter duration.  ICH M7 supports a 10 µg/dose limit for less-than-lifetime (LTL) exposures up to a cumulative duration of ten years as it maintains an excess cancer risk of less than 1 in 100,000.  For a once weekly or less frequent dosing interval over the course of 70 years, the cumulative number of days of dosing would be no more than 3640 (i.e., 52 weeks/year x 70 years) or 9.97 years of daily dosing.  Therefore, the intermittent dosing regimens fall into the cumulative >1 year – 10 years category as described in Table 2, Section 7.3 of ICH M7. ",size:24})],
                    spacing:{
                        after:200
                    }
                }),
                new Paragraph({
                    children:[new TextRun({text:"The derived _SCT_ was also based on a published oral acceptable daily intake (ADI) of 90 µg/day for Cramer Class III structures, or “substances of a chemical structure that permit no strong initial presumptions of safety or may even suggest significant toxicity”.  The Cramer Class III oral ADI was derived by applying a 100-fold uncertainty factor to the 5th percentile no-observed adverse effect levels of repeat-dose oral toxicity data for the Class III structure chemicals.  An assumption of 10% oral bioavailability (applied to adjust the Cramer Class III oral ADI for route of exposure) results in a parenteral ADI of _SCT_.  This would be considered conservative for a weekly dosing regimen, but _SCT_ was chosen as the SCT to mitigate the potential for induction of sensitization response due to potential leachables. ",size:24})],
                    spacing:{
                        after:200
                    }
                }),
                new Paragraph({
                    children:[new TextRun({text:"__________________________________"}),],
                    spacing:{
                        before:2600,
                    }
                }),
                new Paragraph({
                    children:[
                        new TextRun({text:"4 RPT-245606: Development Process Flow Document LY3298176 Injection at 200L and 400L scale",break:1,size:18}),
                        new TextRun({text:"5 ICH M7 (R1) Assessment and Control of DNA Reactive (Mutagenic) Impurities in Pharmaceuticals to Limit Potential Carcinogenic Risk, Step 4 dated 31March2017. https://database.ich.org/sites/default/files/M7_R1_Guideline.pdf.",break:1,size:18}),
                        new TextRun({text:"6 Kim Li et al (2015). Creating a Holistic Extractables and Leachables (E&L) Program for Biotechnology Products. PDA J Pharm Sci and Tech 69: 590-619. doi:10.5731/pdajpst.2015.01073",break:1,size:18}),
                        new TextRun({text:"7 Kimber I, Gerberick GF, Basketter DA. Thresholds in contact sensitization: theoretical and practical considerations. Food Chem Toxicol. 1999;37(5):553-560. doi:10.1016/s0278-6915(99)00048-4.",break:1,size:18}),
                    ],
                    alignment:"left",
                })
        
            ]
        }

export default page13;