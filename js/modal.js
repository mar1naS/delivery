(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    openSecondModalBtn: document.querySelector("[data-second-modal-open]"), //селектори другого модального вікна
    closeSecondModalBtn: document.querySelector("[data-second-modal-close]"), //селектори другого модального вікна
    modalSecond: document.querySelector("[data-second-modal]"), //селектори другого модального вікна
    form: document.querySelector("[form-modal]"), //це причепи на тег форм
  };
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.openSecondModalBtn.addEventListener("click", toggleModal);
  refs.closeSecondModalBtn.addEventListener("click", toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
  refs.form.addEventListener("submit", form);
  function form(e) {
    e.preventDefault();
  }
})();
