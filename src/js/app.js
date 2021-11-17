export default function telephone(phone) {
    const pattern = /^(\+)?(\d{1,3}[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{7,10}$/;
    if(pattern.test(phone)) {
        phone = phone.replaceAll(RegExp(/[\)\(\s-\+]/g), "");
        if(phone.length === 11 && phone.startsWith("8")) {
            phone = phone.replace("8", "7");
        }
        phone = "+".concat(phone);
        return phone;
    } else {
        return "Не верный формат телефонного номера"
    }
}