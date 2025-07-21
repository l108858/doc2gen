
// page1 consts

export const constants = {
    molecule:'Molecule',
    site:'Site',
    documentAuthor:'Document Author',
    brand:'Brand',
    drugSubstanceOrDrugProduct:'Drug xyz',
    building:'Building',

    roleTitle:'Role Title',
    department:'Department',
    documentTechnicalReviewer:'Document Technical Reviewer',
    documentQualityReviewer:'Document Quality Reviewer',
    documentDIR:'Document DIR',
    documentTechinalApprover:'Document Technical Approver',
    documentQaApprover:'Document QA Approver',

    textForDrugSubstance:'TEXT FOR Drug Substance',
    durgSubstance:'Drug Substance',
    textForDrugProduct:'TEXT For Drug Product',
    drugProduct:'Drug Product',
    
    fillInPrompt:'fill in prompt',
    pullFromARAT:'Pull from ARAT for each Material # included in the report',
    allowInsertOfMaterial:'Fill in prompt / allow insert of Material # and hyperlink to Veeva doc?'



}





export const table1Data = [
    {
        riskFactor: "Distance Along the Production Stream (DAS)",
        ratingArr: [
            {
                rating: 1,
                ratingCriteria: "DS Upstream: e.g., working cell bank, vial thaw, inoculum, expansion, production, harvest, plasma, and buffer/media solution preparation",
            },
            {
                rating: 3,
                ratingCriteria: "DS Purification: e.g., filtration, chromatography, viral inactivation, viral filtration, and UF/DF (including excipient preparation)",
            },
            {
                rating: 5,
                ratingCriteria: "DS After TFF/Final Purification e.g., formulation, 0.22 μm filtration, including bulk CCS",
            },
            {
                rating: 9,
                ratingCriteria: "DP formulation including before and after final filtration",
            },
        ],
        ELWeight: 0.4,
    },

];

export const table3Data = [
    {
        pcm_description_sap_name_if_applicable: "[Material Desc]",
        material_number: "[Material]",
        distance_along_the_production_stream: "[DAS]",
        dilution_ratio_dr_sa_v: "[DR]",
        exposure_temperature_et: "[ET]",
        exposure_duration_ed: "[ED]",
        process_fluid_and_material_interaction_pfmi: "[PFMI]",
        risk_score: "[Risk Total]",
        risk_rating: "[Risk Level]",
    },
    {
        pcm_description_sap_name_if_applicable: "[Material Desc]",
        material_number: "[Material]",
        distance_along_the_production_stream: "[DAS]",
        dilution_ratio_dr_sa_v: "[DR]",
        exposure_temperature_et: "[ET]",
        exposure_duration_ed: "[ED]",
        process_fluid_and_material_interaction_pfmi: "[PFMI]",
        risk_score: "[Risk Total]",
        risk_rating: "[Risk Level]",
    },
];

