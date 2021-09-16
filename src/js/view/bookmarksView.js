import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class BookmarksVeiw extends View {
  _errorMessage = 'No bookmarks yet find a nice recipe and bookmark it';
  _message = '';
  _parentElement = document.querySelector('.bookmarks__list');

  _generateMarkUp() {
    console.log(this._data);
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
    // return this._data.map(bookmark => previewView.render(bookmark, false));
    // return this._data.map(this._generateMarkUpPreview).join('');
  }
}

export default new BookmarksVeiw();
