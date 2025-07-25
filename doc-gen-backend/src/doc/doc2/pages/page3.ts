import { HeadingLevel, Paragraph, TableOfContents, TextRun } from "docx";
const page3 = {

    children:[
                new Paragraph({
                    children:[new TextRun({text:"Table of Content",size:28,bold:true})],
                    heading:HeadingLevel.HEADING_1
                },),
                new TableOfContents("Table of Content", {
                    hyperlink: true,
                    headingStyleRange: "1-2",
                }),
    ]
}

export default page3;

// below is static table of content.......
// import {
//     Paragraph,
//     TextRun,
//     TabStopType,
//     TabStopPosition,
//     HeadingLevel,
// } from "docx";

// const tocEntries = [
//     { title: "Abstract", page: 1, level: 1 },
//     { title: "Table of Contents", page: 3, level: 1 },
//     { title: "Executive Summary", page: 4, level: 1 },
//     { title: "E&L Risk Assessment Scope", page: 4, level: 1 },
//     { title: "Risk Assessment Summary", page: 6, level: 1 },
//     { title: "Filter: Mounjaro Drug Product B100 PFS3 Risk Assessment Summary", page: 6, level: 2 },
//     { title: "Single-Use Vessel: Mounjaro Drug Product B100 PFS3 Risk Assessment Summary", page: 6, level: 2 },
//     { title: "Durable Process Equipment: Mounjaro Drug Product B100 PFS3 Risk Assessment Summary", page: 6, level: 2 },
//     { title: "Polymeric Consumables: Mounjaro B100 PFS3 Risk Assessment", page: 7, level: 2 },
//     { title: "Determining PCM E&L Risk", page: 8, level: 1 },
//     { title: "Table 1: Overview of Risk Scores for Extractable as Potential Leachables Assessment1", page: 8, level: 2 },
//     { title: "Table 2: Risk Score Category Rankings", page: 8, level: 2 },
//     { title: "Summarized PCM E&L Risk Assessment Results", page: 9, level: 1 },
//     { title: "Revision History", page: 10, level: 1 },
//     { title: "References for Extractable studies", page: 10, level: 2 },
//     { title: "References for Leachables studies", page: 10, level: 2 },
// ];

// const tocParagraphs = tocEntries.map(entry =>
//     new Paragraph({
//         spacing: {
//             after: 100, 
//         },
//         indent: entry.level === 2 ? { left: 320 } : undefined, 
//         tabStops: [
//             {
//                 type: TabStopType.RIGHT,
//                 position: TabStopPosition.MAX,
//                 leader: "dot",
//             },
//         ],
//         children: [
//             new TextRun({
//                 text: entry.title,
//             }),
//             new TextRun({
//                 text: `\t${entry.page}`,
//             }),
//         ],
//     })
// );

// const page3 = {
//     children: [
//         new Paragraph({
//             children: [
//                 new TextRun({
//                     text: "Table of Contents",
//                     size: 28,
//                     bold: true,
//                 }),
//             ],
//             heading: HeadingLevel.HEADING_1,
//         }),
//         ...tocParagraphs,
//     ],
// };

// export default page3;
