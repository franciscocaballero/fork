import View from './View.js';
import icons from 'url:../../img/icons.svg';
class ResultsVeiw extends View {
  _errorMessage = 'No recipes found for your query:( Please try agian.';
  _message = '';
  _parentElement = document.querySelector('.results');

  _generateMarkUp() {
    console.log(this._data);
    return this._data.map(this._generateMarkUpPreview);
    // return this._data.map(this._generateMarkUpPreview).join('');
  }

  _generateMarkUpPreview(results) {
    return `
          <li class="preview">
            <a class="preview__link" href="#${results.id}">
              <figure class="preview__fig">
                <img crossorigin="anonymous" src="${results.image}" atl="${results.title}"/>
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${results.title}</h4>
                <p class="preview__publisher">T${results.publisher}</p>
                
              </div>
            </a>
          </li>`;
  }
}

export default new ResultsVeiw();
