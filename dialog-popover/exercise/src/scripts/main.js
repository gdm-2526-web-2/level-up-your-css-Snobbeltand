import "../styles/main.css";

/* showModal, closeModal is beschikbaar op dialog elementen */
const modalTriggers = document.querySelectorAll("[data-modal-target]");

modalTriggers.forEach((modalTrigger) => {
  modalTrigger.addEventListener("click", () => {
    const targetname = modalTrigger.getAttribute("data-modal-target");
    console.log(modalTrigger, targetname);

    const dialog = document.querySelector(`[data-modal="${targetname}"]`);
    if (dialog) {
      dialog.showModal();

      const close = dialog.querySelector(".close");
      close.addEventListener("click", () => {
        dialog.close();
      });
    }
  });
});
