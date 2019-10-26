import * as React from 'react';
import { ICountry } from '../../Models/country';
import { connect } from 'react-redux';
import actions from '../../redux/actions.config';

export interface IAddImageProps {
    countries: ICountry[];
    saveIamge(code: string, imageUrl: string): void;

}


export interface IAddImageState {
    code: string;
    imageUrl: string;
}

class _AddImage extends React.Component<IAddImageProps, IAddImageState> {
    state: IAddImageState = {
        imageUrl: "",
        code: "",
    }

    public render() {
        const { countries, saveIamge } = this.props
        const { code, imageUrl } = this.state
        return (
            <div>
                <input value={this.state.imageUrl} onChange={(e) => {
                    const value = e.target.value;
                    this.setState({ imageUrl: value })
                }} ></input>
                <button
                    disabled={!imageUrl || !code}
                    onClick={() => saveIamge(code, imageUrl)}>add Image</button>
                <div>
                    <select value={this.state.code} onChange={(e) => {
                        const value = e.target.value;
                        this.setState({ code: value })
                    }}>
                        <option value={""} >Select Country</option>
                        {countries.map(country =>
                            <option key={country.alpha3Code} value={country.alpha3Code} >{country.name}</option>)} </select>
                </div>
            </div>
        );
    }
}

export const AddImage = connect(
    (state: any) => ({
        countries: state.countries,
    }),
    (dispatch) => ({
        saveIamge: (code: string, imageUrl: string) => {
            dispatch({
                type: actions.SAVE_IMAGE, payload: {
                    imageUrl, code
                }
            })
        }

    })
)(
    _AddImage
)

