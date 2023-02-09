let seatX2Y1Button = document.querySelector(`#x2y1`);
let imgx2y1 = document.querySelector(`#x2y1-img`);
let selectImgx2y1 = document.querySelector(`#x2y1-select-img`);
let numberx2y1 = document.querySelector(`#x2y1-number`);
let seatX3Y1Button = document.querySelector(`#x3y1`);
let imgx3y1 = document.querySelector(`#x3y1-img`);
let selectImgx3y1 = document.querySelector(`#x3y1-select-img`);
let numberx3y1 = document.querySelector(`#x3y1-number`);
let seatX4Y1Button = document.querySelector(`#x4y1`);
let imgx4y1 = document.querySelector(`#x4y1-img`);
let selectImgx4y1 = document.querySelector(`#x4y1-select-img`);
let numberx4y1 = document.querySelector(`#x4y1-number`);
let seatX1Y2Button = document.querySelector(`#x1y2`);
let imgx1y2 = document.querySelector(`#x1y2-img`);
let selectImgx1y2 = document.querySelector(`#x1y2-select-img`);
let numberx1y2 = document.querySelector(`#x1y2-number`);
let seatX2Y2Button = document.querySelector(`#x2y2`);
let imgx2y2 = document.querySelector(`#x2y2-img`);
let selectImgx2y2 = document.querySelector(`#x2y2-select-img`);
let numberx2y2 = document.querySelector(`#x2y2-number`);
let seatX3Y2Button = document.querySelector(`#x3y2`);
let imgx3y2 = document.querySelector(`#x3y2-img`);
let selectImgx3y2 = document.querySelector(`#x3y2-select-img`);
let numberx3y2 = document.querySelector(`#x3y2-number`);
let seatX1Y3Button = document.querySelector(`#x1y3`);
let imgx1y3 = document.querySelector(`#x1y3-img`);
let selectImgx1y3 = document.querySelector(`#x1y3-select-img`);
let numberx1y3 = document.querySelector(`#x1y3-number`);
let seatX3Y3Button = document.querySelector(`#x3y3`);
let imgx3y3 = document.querySelector(`#x3y3-img`);
let selectImgx3y3 = document.querySelector(`#x3y3-select-img`);
let numberx3y3 = document.querySelector(`#x3y3-number`);
let seatX4Y3Button = document.querySelector(`#x4y3`);
let imgx4y3 = document.querySelector(`#x4y3-img`);
let selectImgx4y3 = document.querySelector(`#x4y3-select-img`);
let numberx4y3 = document.querySelector(`#x4y3-number`);

let allcost = document.querySelector(`#allcost`);

let billetsNode = document.querySelector(`#billets`);

let count = 0;

let arrNumber = document.querySelectorAll(`.number-seat`);
let flagx2y1 = true;
let countx2y1;
seatX2Y1Button.addEventListener(`click`, function () {
    imgx2y1.classList.toggle(`d-none`);
    selectImgx2y1.classList.toggle(`d-none`);
    if (flagx2y1) {
        numberx2y1.style.top = `30%`;
        allcost.innerHTML = Number(allcost.innerHTML) + 600;
        count++;
        billetsNode.innerHTML +=
            `
        <div class="card mb-2 mb-xl-4" id="billet${count}">
            <div class="card-header">
                <h3>Билет</h3>
            </div>
            <div class="card-body">
                <p class="card-text">
                    <b>Место</b>: Ряд — 1, Место — 2.<br>
                    <b>Стоимость</b>: 600 руб.
                </p>
            </div>
        </div>
        `;
        countx2y1 = count;
        flagx2y1 = false;
    }
    else {
        let billet = document.querySelector(`#billet${countx2y1}`);
        billetsNode.removeChild(billet);
        count--;
        allcost.innerHTML = Number(allcost.innerHTML) - 600;
        numberx2y1.style.top = `16%`;
        flagx2y1 = true;
    }
});
let flagx3y1 = true;
let countx3y1;
seatX3Y1Button.addEventListener(`click`, function () {
    imgx3y1.classList.toggle(`d-none`);
    selectImgx3y1.classList.toggle(`d-none`);
    if (flagx3y1) {
        numberx3y1.style.top = `30%`;
        allcost.innerHTML = Number(allcost.innerHTML) + 600;
        count++;
        billetsNode.innerHTML +=
            `
        <div class="card mb-2 mb-xl-4" id="billet${count}">
            <div class="card-header">
                <h3>Билет</h3>
            </div>
            <div class="card-body">
                <p class="card-text">
                    <b>Место</b>: Ряд — 1, Место — 3.<br>
                    <b>Стоимость</b>: 600 руб.
                </p>
            </div>
        </div>
        `;
        countx3y1 = count;
        flagx3y1 = false;
    }
    else {
        let billet = document.querySelector(`#billet${countx3y1}`);
        billetsNode.removeChild(billet);
        count--;
        allcost.innerHTML = Number(allcost.innerHTML) - 600;
        numberx3y1.style.top = `16%`;
        flagx3y1 = true;
    }
});
let flagx4y1 = true;
let countx4y1;
seatX4Y1Button.addEventListener(`click`, function () {
    imgx4y1.classList.toggle(`d-none`);
    selectImgx4y1.classList.toggle(`d-none`);
    if (flagx4y1) {
        numberx4y1.style.top = `30%`;
        allcost.innerHTML = Number(allcost.innerHTML) + 600;
        count++;
        billetsNode.innerHTML +=
            `
        <div class="card mb-2 mb-xl-4" id="billet${count}">
            <div class="card-header">
                <h3>Билет</h3>
            </div>
            <div class="card-body">
                <p class="card-text">
                    <b>Место</b>: Ряд — 1, Место — 4.<br>
                    <b>Стоимость</b>: 600 руб.
                </p>
            </div>
        </div>
        `;
        countx4y1 = count;
        flagx4y1 = false;
    }
    else {
        let billet = document.querySelector(`#billet${countx4y1}`);
        billetsNode.removeChild(billet);
        count--;
        allcost.innerHTML = Number(allcost.innerHTML) - 600;
        numberx4y1.style.top = `16%`;
        flagx4y1 = true;
    }
});
let flagx1y2 = true;
let countx1y2;
seatX1Y2Button.addEventListener(`click`, function () {
    imgx1y2.classList.toggle(`d-none`);
    selectImgx1y2.classList.toggle(`d-none`);
    if (flagx1y2) {
        numberx1y2.style.top = `30%`;
        allcost.innerHTML = Number(allcost.innerHTML) + 500;
        count++;
        billetsNode.innerHTML +=
            `
        <div class="card mb-2 mb-xl-4" id="billet${count}">
            <div class="card-header">
                <h3>Билет</h3>
            </div>
            <div class="card-body">
                <p class="card-text">
                    <b>Место</b>: Ряд — 2, Место — 1.<br>
                    <b>Стоимость</b>: 500 руб.
                </p>
            </div>
        </div>
        `;
        countx1y2 = count;
        flagx1y2 = false;
    }
    else {
        let billet = document.querySelector(`#billet${countx1y2}`);
        billetsNode.removeChild(billet);
        count--;
        allcost.innerHTML = Number(allcost.innerHTML) - 500;
        numberx1y2.style.top = `16%`;
        flagx1y2 = true;
    }
});
let flagx2y2 = true;
let countx2y2;
seatX2Y2Button.addEventListener(`click`, function () {
    imgx2y2.classList.toggle(`d-none`);
    selectImgx2y2.classList.toggle(`d-none`);
    if (flagx2y2) {
        numberx2y2.style.top = `30%`;
        allcost.innerHTML = Number(allcost.innerHTML) + 500;
        count++;
        billetsNode.innerHTML +=
            `
        <div class="card mb-2 mb-xl-4" id="billet${count}">
            <div class="card-header">
                <h3>Билет</h3>
            </div>
            <div class="card-body">
                <p class="card-text">
                    <b>Место</b>: Ряд — 2, Место — 2.<br>
                    <b>Стоимость</b>: 500 руб.
                </p>
            </div>
        </div>
        `;
        countx2y2 = count;
        flagx2y2 = false;
    }
    else {
        let billet = document.querySelector(`#billet${countx2y2}`);
        billetsNode.removeChild(billet);
        count--;
        allcost.innerHTML = Number(allcost.innerHTML) - 500;
        numberx2y2.style.top = `16%`;
        flagx2y2 = true;
    }
});
let flagx3y2 = true;
let countx3y2;
seatX3Y2Button.addEventListener(`click`, function () {
    imgx3y2.classList.toggle(`d-none`);
    selectImgx3y2.classList.toggle(`d-none`);
    if (flagx3y2) {
        numberx3y2.style.top = `30%`;
        allcost.innerHTML = Number(allcost.innerHTML) + 500;
        count++;
        billetsNode.innerHTML +=
            `
        <div class="card mb-2 mb-xl-4" id="billet${count}">
            <div class="card-header">
                <h3>Билет</h3>
            </div>
            <div class="card-body">
                <p class="card-text">
                    <b>Место</b>: Ряд — 2, Место — 3.<br>
                    <b>Стоимость</b>: 500 руб.
                </p>
            </div>
        </div>
        `;
        countx3y2 = count;
        flagx3y2 = false;
    }
    else {
        let billet = document.querySelector(`#billet${countx3y2}`);
        billetsNode.removeChild(billet);
        count--;
        allcost.innerHTML = Number(allcost.innerHTML) - 500;
        numberx3y2.style.top = `16%`;
        flagx3y2 = true;
    }
});
let flagx1y3 = true;
let countx1y3;
seatX1Y3Button.addEventListener(`click`, function () {
    imgx1y3.classList.toggle(`d-none`);
    selectImgx1y3.classList.toggle(`d-none`);
    if (flagx1y3) {
        numberx1y3.style.top = `30%`;
        allcost.innerHTML = Number(allcost.innerHTML) + 400;
        count++;
        billetsNode.innerHTML +=
            `
        <div class="card mb-2 mb-xl-4" id="billet${count}">
            <div class="card-header">
                <h3>Билет</h3>
            </div>
            <div class="card-body">
                <p class="card-text">
                    <b>Место</b>: Ряд — 3, Место — 1.<br>
                    <b>Стоимость</b>: 400 руб.
                </p>
            </div>
        </div>
        `;
        countx1y3 = count;
        flagx1y3 = false;
    }
    else {
        let billet = document.querySelector(`#billet${countx1y3}`);
        billetsNode.removeChild(billet);
        count--;
        allcost.innerHTML = Number(allcost.innerHTML) - 400;
        numberx1y3.style.top = `16%`;
        flagx1y3 = true;
    }
});
let flagx3y3 = true;
let countx3y3;
seatX3Y3Button.addEventListener(`click`, function () {
    imgx3y3.classList.toggle(`d-none`);
    selectImgx3y3.classList.toggle(`d-none`);
    if (flagx3y3) {
        numberx3y3.style.top = `30%`;
        allcost.innerHTML = Number(allcost.innerHTML) + 400;
        count++;
        billetsNode.innerHTML +=
            `
        <div class="card mb-2 mb-xl-4" id="billet${count}">
            <div class="card-header">
                <h3>Билет</h3>
            </div>
            <div class="card-body">
                <p class="card-text">
                    <b>Место</b>: Ряд — 3, Место — 3.<br>
                    <b>Стоимость</b>: 400 руб.
                </p>
            </div>
        </div>
        `;
        countx3y3 = count;
        flagx3y3 = false;
    }
    else {
        let billet = document.querySelector(`#billet${countx3y3}`);
        billetsNode.removeChild(billet);
        count--;
        allcost.innerHTML = Number(allcost.innerHTML) - 400;
        numberx3y3.style.top = `16%`;
        flagx3y3 = true;
    }
});
let flagx4y3 = true;
let countx4y3;
seatX4Y3Button.addEventListener(`click`, function () {
    imgx4y3.classList.toggle(`d-none`);
    selectImgx4y3.classList.toggle(`d-none`);
    if (flagx4y3) {
        numberx4y3.style.top = `30%`;
        allcost.innerHTML = Number(allcost.innerHTML) + 400;
        count++;
        billetsNode.innerHTML +=
            `
        <div class="card mb-2 mb-xl-4" id="billet${count}">
            <div class="card-header">
                <h3>Билет</h3>
            </div>
            <div class="card-body">
                <p class="card-text">
                    <b>Место</b>: Ряд — 3, Место — 4.<br>
                    <b>Стоимость</b>: 400 руб.
                </p>
            </div>
        </div>
        `;
        countx4y3 = count;
        flagx4y3 = false;
    }
    else {
        let billet = document.querySelector(`#billet${countx4y3}`);
        billetsNode.removeChild(billet);
        count--;
        allcost.innerHTML = Number(allcost.innerHTML) - 400;
        numberx4y3.style.top = `16%`;
        flagx4y3 = true;
    }
});




let reservationButton = document.querySelector(`#reservation`);
let reservationNode = document.querySelector(`#reservation-body`);
let reserveButton = document.querySelector(`#reserve`);

reservationButton.addEventListener(`click`, function () {
    if (allcost.innerHTML == '0') reserveButton.setAttribute(`disabled`, `disabled`);
    else reserveButton.removeAttribute(`disabled`);

    reservationNode.innerHTML =
        `
    <div class="row g-3 mb-5">
        ${billetsNode.innerHTML}
        <h3>Итого: ${allcost.innerHTML}₽</h3>
        <hr>
        <div class="card border-danger">
            <div class="card-body">
                <p>
                Оплата билетов происходит уже на кассе кинотеатра,
                поэтому билеты нужно выкупить
                минимум за 1 день до начала, иначе бронирование <strong>сгорит</strong>.
                </p>
            </div>
        </div>
        <hr>
        <div class="col-12">
            <label class="form-label" for="tel">
                Telephone
            </label>
            <input class="form-control" type="number" id="tel" placeholder="79991112233" required>
            <div class="invalid-feedback">
                Invalid field!
            </div>
        </div>
        <div class="col-12">
            <label class="form-label" for="mail">
                E-mail
            </label>
            <input class="form-control" type="email" id="mail" placeholder="test@example.com"
                required>
            <div class="invalid-feedback">
                Invalid field!
            </div>
        </div>
    </div>
    `;
});

let modal1 = new bootstrap.Modal(`#modal1`);
let modal2 = new bootstrap.Modal(`#modal2`);
let modal3 = new bootstrap.Modal(`#modal3`);
let modal4 = new bootstrap.Modal(`#modal4`);

let payButton = document.querySelector(`#pay`);

reserveButton.addEventListener(`click`, function () {

    let telInput = document.querySelector(`#tel`);
    let mailInput = document.querySelector(`#mail`);

    let isValid = true;

    if (telInput.value.length != 11) {
        telInput.classList.add(`is-invalid`);
        isValid = false;
    }
    else telInput.classList.remove(`is-invalid`);

    if (!mailInput.value.includes(`@`) ||
        mailInput.value.startsWith(`@`) ||
        mailInput.value.endsWith(`@`)
    ) {
        mailInput.classList.add(`is-invalid`);
        isValid = false;
    }
    else mailInput.classList.remove(`is-invalid`);

    if (isValid) {
        modal1.hide();
        modal2.show();

        reservationButton.classList.add(`d-none`);
        payButton.classList.remove(`d-none`);
    }
});

let paysButton = document.querySelector(`#pays`);

paysButton.addEventListener(`click`, function () {
    let isValid = true;

    let numberInput = document.querySelector(`#card-number`);
    let dateInput = document.querySelector(`#expiry-date`);
    let cvvInput = document.querySelector(`#cvv`);

    if (numberInput.value.length != 16) {
        numberInput.classList.add(`is-invalid`);
        isValid = false;
    }
    else numberInput.classList.remove(`is-invalid`);

    if (dateInput.value.length != 4) {
        dateInput.classList.add(`is-invalid`);
        isValid = false;
    }
    else dateInput.classList.remove(`is-invalid`);

    if (cvvInput.value.length != 3) {
        cvvInput.classList.add(`is-invalid`);
        isValid = false;
    }
    else cvvInput.classList.remove(`is-invalid`);

    if (isValid) {
        modal3.hide();
        modal4.show();

        reservationButton.classList.remove(`d-none`);
        payButton.classList.add(`d-none`);
    }
});