import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { People } from "@/components/RegistrationModel/RegistrationModel";

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const fname = body.fname;
    const lname = body.lname;
    const email = body.email;
    const phn = body.phn;
    const job = body.job;
    const type = body.type;
    const peoples = body.peoples;
    const amount = type === "Family" ? 15 : type === "Single" ? 10 : 5;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PWD,
      },
      secure: true,
    });

    const mailData = {
      from: process.env.EMAIL_ID,
      to: process.env.EMAIL_TO,
      subject: `New registration - ${fname} ${lname}`,
      text: `New registration - ${fname} ${lname}`,
      html: `<!DOCTYPE html> <html> <head> <title></title> <meta charset="utf-8" /> <meta name="viewport" content="width=device-width, initial-scale=1" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <style type="text/css"> body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; } table { border-collapse: collapse !important; } body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; } @media screen and (max-width: 525px) { .wrapper { width: 100% !important; max-width: 100% !important; } .responsive-table { width: 100% !important; } .padding { padding: 10px 5% 15px 5% !important; } .section-padding { padding: 0 15px 50px 15px !important; } } .form-container { margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc; } .form-heading { color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0; } .form-answer { color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0; } div[style*="margin: 16px 0;"] { margin: 0 !important; } </style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2 align="center">New Registration</h2> <div class="form-container"> <h3 class="form-heading" align="left">Type</h3><p class="form-answer" align="left">${type}</p> <h3 class="form-heading" align="left">First Name</h3><p class="form-answer" align="left">${fname}</p> <h3 class="form-heading" align="left">Last Name</h3><p class="form-answer" align="left">${lname}</p> <h3 class="form-heading" align="left">Email</h3><p class="form-answer" align="left">${email}</p> <h3 class="form-heading" align="left">Phone No.</h3><p class="form-answer" align="left">${phn}</p> ${
        type !== "Student"
          ? `<h3 class="form-heading" align="left">Occupation</h3><p class="form-answer" align="left">${job}</p>`
          : ""
      } ${
        type === "Family"
          ? `<h3 class="form-heading" align="left">Additional People</h3><p class="form-answer" align="left">${peoples.map(
              (data: People) => `${data.fname} ${data.lname}`
            )}</p>`
          : ""
      } <h3 class="form-heading" align="left">Amount</h3><p class="form-answer" align="left">€${amount}</p> </div> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> </body> </html>`,
    };

    await transporter.sendMail(mailData);

    return NextResponse.json({
      success: true,
    });
  } catch (e) {
    return NextResponse.json({
      success: false,
    });
  }
}
