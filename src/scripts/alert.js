"use strict";

function setupCloseAlert() {
    const alertContainerSelector = ".alert";
    const alertCloseBtnSelector = ".alert-close";

    const alertCloseBtnList = document.querySelectorAll(alertCloseBtnSelector);

    alertCloseBtnList.forEach(alertClostBtn => {
        alertClostBtn.addEventListener("click", element => {
            const alertContainer = element.currentTarget.closest(alertContainerSelector);
            alertContainer.style.display = "none";
        })
    });
}

setupCloseAlert();