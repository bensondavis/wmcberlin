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
      text: `${body.fname} ${body.lname} new`,
      html: `<div>
          <h2 style="fontSize: 22px;">${fname} ${lname}</h2>
          <h3>
            Type: ${type}<br/>
            Fname: ${fname}<br/>
            Lname: ${lname}<br/>
            Email: ${email}<br/>
            Phone: ${phn}<br/>
            ${type !== "Student" ? `Occupation: ${job}<br/>` : ""}
            ${
              type === "Family"
                ? `Additional People: ${peoples.map(
                    (data: People) => `${data.fname} ${data.lname}`
                  )}`
                : ""
            }
            Amount: ${amount}€
          </h3>
        </div>`,
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
