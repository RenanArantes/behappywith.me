import React from 'react';
import './img/avatares.png'

class Image extends React.Component {
    constructor(props) {
        super(props);
    }

    calcularPosicaoX() {
        return `${this.props.EixoX * this.props.width * (-1)}px`
    }

    calcularPosicaoY() {
        return `${this.props.EixoY * this.props.height * (-1)}px`
    }

    calcularTamanho() {
        return `auto ${this.props.backgroundHeight}px`
    }

    obterEstilo() {
        return {
            backgroundImage: `url(${this.props.arquivo})`,
            backgroundPositionX: this.calcularPosicaoX(),
            backgroundPositionY: this.calcularPosicaoY(),
            backgroundSize: this.calcularTamanho(),
            width: `${this.props.width}px`,
            height: `${this.props.height}px`,
            display: 'table',
            margin: '0 auto'
        }
    }

    render() {
        return(
            <div style={this.obterEstilo()}>
            </div>
        )
    }

}

export default Image;