export class Apod {

    private _title = ''
    private _date = ''
    private _explanation = ''
    private _url = ''
    private _mediaType = ''
    private _hdUrl = ''

    private _isImage = false
    private _isVideo = false

    constructor(json?: any) {
        if (json) {
            this._title = json.title
            this._date = json.date
            this._explanation = json.explanation
            this._url = json.url
            this._mediaType = json.media_type
            this._hdUrl = json.hdurl

            this._isImage = this._mediaType === 'image'
            this._isVideo = this._mediaType === 'video'
        }
    }

    get title() {
        return this._title
    }

    get date() {
        return this._date
    }

    get explanation() {
        return this._explanation
    }

    get url() {
        return this._url
    }

    get mediaType() {
        return this._mediaType
    }

    get hdUrl() {
        return this._hdUrl
    }

    get isImage() {
        return this._isImage
    }

    get isVideo() {
        return this._isVideo
    }

    setInfo(json: any) {
        this._title = json.title
        this._date = json.date
        this._explanation = json.explanation
        this._url = json.url
        this._mediaType = json.media_type
        this._hdUrl = json.hdurl

        this._isImage = this._mediaType === 'image'
        this._isVideo = this._mediaType === 'video'
    }   

    isEmpty() {
        return this._date === ''
    }
}