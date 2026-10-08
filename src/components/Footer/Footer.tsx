export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Donald Newholm</p>
      <p>Copyright {currentYear}</p>
    </footer>
  );
}
