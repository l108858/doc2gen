import { Document } from "docx";
import page1 from "./pages/page1";
import page2 from "./pages/page2";
import page3 from "./pages/page3";
import { page4 } from "./pages/page4";
import { page5 } from "./pages/page5";
import { page6 } from "./pages/page6";
import page7 from "./pages/page7";
import page8 from "./pages/page8";
import page9 from "./pages/page9";
import page10 from "./pages/page10";


const generateDoc2 = new Document({
    features:{
        updateFields:true
    },
    sections: [
        page1,
        page2,
        page3,
        page4,
        page5,
        page6,
        page7,
        page8,
        page9,
        page10
        
    ],
    
});

export default generateDoc2;

