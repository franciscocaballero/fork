import icons from 'url:../../img/icons.svg';

export default class View {
  _data;
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    //1: Getting Data
    this._data = data;
    //2: Generating Markup
    const markUp = this._generateMarkUp();
    //3: Clearing parent EL
    this._clear();
    //4: inserting HTML to DOM:
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }

  update(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return this.renderError();
    }
    this._data = data;
    const newMarkup = this._generateMarkUp;

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    // console.log(newElArray.from(ements);
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    console.log(curElements, newElements);

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      console.log(curEl, newEl.isEqualNode(curEl));
    });

    if (!newEl.isEqualNode(curEl)) {
      curEl.textContent = newEl.textContent;
    }
  }
  _clear() {
    //Clearing DOM Before insterting HTML
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markUp = `
          <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
          `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }

  renderError(message = this._errorMessage) {
    const markUp = `
      <div class="error">
      <div>
        <svg>
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>
        `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }

  renderMessage(message = this._message) {
    const markUp = `
      <div class="message">
      <div>
        <svg>
          <use href="${icons}#icon-smile"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>
        `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markUp);
  }
}
