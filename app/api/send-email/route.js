import { NextResponse } from "next/server";

const mailjet = require("node-mailjet").apiConnect(
    process.env.NEXT_PUBLIC_MAILJET_API_KEY,
    process.env.NEXT_PUBLIC_MAILJET_SECRET_KEY
);

export async function POST(request) {
    const reqBody = await request.json();
    try {
        const emailMessage = `
            <div>
            Name: ${reqBody.name}

 <br/>Email: ${reqBody.email}

 <br/><br />
    Message: ${reqBody.message}
    </div>`

        async function sendEmail() {
            const response = await mailjet
                .post("send", { version: 'v3.1' })
                .request({
                    Messages: [
                        {
                            From: {
                                Email: "abhirupkumar2003@gmail.com",
                                Name: "Portfolio Message • abhirupkumar2003@gmail.com",
                            },
                            To: [
                                {
                                    Email: "abhirupkumar2003@gmail.com",
                                },
                            ],
                            Subject: `New Message from ${reqBody.name ?? "Someone"}`,
                            TextPart: `New Message from ${reqBody.name ?? "Someone"}`,
                            HTMLPart: emailMessage,
                        },
                    ],
                })
            return response;
        }

        const mail = await sendEmail();
        if (mail.body.Messages[0].Status != "success") {
            return NextResponse.json({ success: false, error: "Some error occured! Couldn't sent your message. Please try later." }, { status: 400 })
        }
        else {
            return NextResponse.json({ success: true, message: "Message Sent" }, { status: 200 })
        }

    }
    catch (err) {
        return NextResponse.json({ success: false, error: err.message }, { status: 400 })
    }
}