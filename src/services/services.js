import { generate } from '@pdfme/generator';
import {basePdf}  from '../assets/base64pdf.js'

export const generateReport = async (e, formData) => {
    e.preventDefault()
    const template = {
        "basePdf": basePdf,
        "schemas": [
            {
              "full_name": {
                "type": "text",
                "position": {
                  "x": 11.26,
                  "y": 19.25
                },
                "width": 53.15,
                "height": 10.29,
                "rotate": 0,
                "alignment": "left",
                "verticalAlignment": "center",
                "fontSize": 11,
                "lineHeight": 1.2,
                "characterSpacing": 0,
                "fontColor": "#0D0E0C",
                "backgroundColor": "",
                "opacity": 1,
                "fontName": "Roboto"
              },
              "phone": {
                "type": "text",
                "position": {
                  "x": 12.11,
                  "y": 24.48
                },
                "width": 45,
                "height": 6.03,
                "rotate": 0,
                "alignment": "left",
                "verticalAlignment": "top",
                "fontSize": 9,
                "lineHeight": 1,
                "characterSpacing": 0,
                "fontColor": "#000000",
                "backgroundColor": "",
                "opacity": 1,
                "fontName": "Roboto"
              },
              "email": {
                "type": "text",
                "position": {
                  "x": 11.38,
                  "y": 32.63
                },
                "width": 45,
                "height": 6.56,
                "rotate": 0,
                "alignment": "left",
                "verticalAlignment": "top",
                "fontSize": 9,
                "lineHeight": 1,
                "characterSpacing": 0,
                "fontColor": "#000000",
                "backgroundColor": "",
                "opacity": 1,
                "fontName": "Roboto"
              },
              "company": {
                "type": "text",
                "position": {
                  "x": 51.07,
                  "y": 9.15
                },
                "width": 33.89,
                "height": 27.72,
                "rotate": 0,
                "alignment": "center",
                "verticalAlignment": "middle",
                "fontSize": 11,
                "lineHeight": 1,
                "characterSpacing": 0,
                "fontColor": "#000000",
                "backgroundColor": "",
                "opacity": 1
              }
            }
          ]
      };
    const inputs = [{
        "full_name" : (formData.first_name + ' ' + formData.last_name).toUpperCase(),
        "email" : formData.email,
        "phone" : formData.phone,
        "company" : formData.company
    }]
    const pdf = await generate({ template, inputs })
    const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
    window.open(URL.createObjectURL(blob));
}