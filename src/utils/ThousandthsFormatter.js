export default function ThousandthsFormatter(number) {
  let separatePoint = number.toString().split(".");
  separatePoint[0] = separatePoint[0].replace(
    /\B(?=(\d{3})*(?!\d)(?!\.\d*))/g,
    ","
  );
  return separatePoint.join(".");
}
