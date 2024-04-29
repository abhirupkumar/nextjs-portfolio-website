'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [msgSent, setMsgSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name == "" || email == "" || !email.includes("@") || message == "") {
      setError("Please fill all the fields.");
      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    }
    setLoading(true);
    const responseData = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });
    const res = await responseData.json();
    if (res.success) {
      console.log('Message Sent');
      setName('');
      setEmail('');
      setMessage('');
      setMsgSent(true);
      setError("");
    } else {
      setError(res.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
    setLoading(false);
  }
  return (
    <>
      {!msgSent ? <form onSubmit={onSubmit} className="flex flex-col gap-y-4">
        {/* input name */}
        <div className="relative flex items-center">
          <Input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <User className="absolute right-6" size={20} />
        </div>

        {/* input email */}
        <div className="relative flex items-center">
          <Input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <MailIcon className="absolute right-6" size={20} />
        </div>

        {/* input message */}
        <div className="relative flex items-center">
          <Textarea placeholder="Type Your Message Here..." className="p-6" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
          <MessageSquare className="absolute top-8 right-6" size={20} />
        </div>

        {/* button */}
        <Button type="submit" className="flex items-center gap-x-1 max-w-[166px]">
          {loading ? "Sending..." : `Let's Talk`} {!loading && <ArrowRightIcon size={20} />}
        </Button>
        {error != "" && <p className="text-red-500 italic">{error}</p>}
      </form>
        :
        <p className="text-green-500 my-auto italic font-semibold text-4xl mx-4">Thank You For Getting In Touch!</p>}
    </>
  );
};

export default Form;
