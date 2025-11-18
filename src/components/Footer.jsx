export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 flex flex-col items-center mt-8">
      <div className="mb-2">
        &copy; {new Date().getFullYear()} RentSetters. All rights reserved.
      </div>
      <div className="flex gap-4">
        <a
          href="https://wa.me/message/LVMAB7DP7VCDF1"
          target="_blank"
          rel="noopener"
          className="underline"
        >
          WhatsApp
        </a>
        <a
          href="https://www.instagram.com/rent.setters?igsh=MWI4a29kemNvdHFhag=="
          target="_blank"
          rel="noopener"
          className="underline"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/share/1BEoFwF1xX/"
          target="_blank"
          rel="noopener"
          className="underline"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
}
