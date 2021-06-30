import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.scss';

type NavigationProps = {
  isOpen: boolean;
  onToggleMenu: (e: React.MouseEvent<Element>) => void;
};

export default function Navigation({ isOpen, onToggleMenu }: NavigationProps) {
  return (
    <nav className={`nav-wrapper ${isOpen ? 'open' : 'close'}`}>
      <ul className="nav">
        <Link to="/">
          <li className="nav-link active-link">Main page</li>
        </Link>
        <Link to="/action-a">
          <li className="nav-link">Action (set A)</li>
        </Link>
        <Link to="/action-b">
          <li className="nav-link">Action (set B)</li>
        </Link>
        <Link to="/animal-a">
          <li className="nav-link">Animal (set A)</li>
        </Link>
        <Link to="/animal-b">
          <li className="nav-link">Animal (set B)</li>
        </Link>
        <Link to="/clothes">
          <li className="nav-link">Clothes</li>
        </Link>
        <Link to="/emotions">
          <li className="nav-link">Emotions</li>
        </Link>
        <Link to="/trees">
          <li className="nav-link">Trees</li>
        </Link>
        <Link to="/sport">
          <li className="nav-link">Sport</li>
        </Link>
      </ul>
      <div
        className="close-menu"
        onClick={(e: React.MouseEvent<Element>) => onToggleMenu(e)}
        aria-hidden="true"
      >
        <svg
          className="close-menu-icon"
          id="closeMenu"
          width="59"
          height="59"
          viewBox="0 0 59 59"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect opacity="0.4" width="59" height="59" fill="url(#pattern0)" />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0" transform="scale(0.00390625)" />
            </pattern>
            <image
              id="image0"
              width="256"
              height="256"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAANDUlEQVR4Xu2dwY4cRQyGnRO8GQeOiDMSUhKSkLchJEFIPAESQuLh4BJUmZ3dmezsTLWrbFfb317TVdX+7P+b3mQ7+0z4ggAEyhJ4VrZyCocABAQBMAQQKEwAARRuPqVDAAEwAxAoTAABFG4+pUMAATADEChMAAEUbj6lQwABMAMQKEwAARRuPqVDAAEwAxAoTAABFG4+pUMAATADEChMAAEUbj6lQwABMAMQKEwAARRuPqVDAAEwAxAoTAABFG4+pUMAATADEChMAAEUbj6lQwABMAMQKEwAARRuPqVDAAEwAxAoTAABFG4+pUMAATADEChMAAEUbj6lQwABMAMQKEwAARRuPqVDAAEwAxAoTAABFG4+pUMAATADEChMAAEUbj6lQwABMAMQKEwAARRuPqVDAAEwAxAoTAABFG4+pUMAATADEChMAAEUbj6lQwABMAMQKEwAARRuPqVDAAEwAxAoTAABFG4+pUMAATADEChMAAEUbj6lQwABMAMQKEwAARRuPqVDAAEwAxAoTAABFG4+pUMAATADEChMAAEUbj6lQwABMAMQKEwAARRuPqVDAAEwAxAoTAABnDf/axH5UUTei8inwnORsfQ2669F5HcR+TdjgZqaEMADtRb+v0TkmzsBvEECmpFack2b848i8lxE/hGR75DAoU8I4MDhNPzHCW5PAUhgyTxvuqnT8B8XIoE7EgjgcviRwKaMLXvxpfAjgZN2VRfApU/+L6eZJ4Fl8331xq6FHwnwBHDxsf+piUIC+5JAT/iRQOG/A+j55OdJYF+hP97tlvCXl0DFbwE04efvBPYhA034S0ugmgBGwo8E1pbASPjLSqCSAGaEHwmsKYEZ4S8pgSoCmBl+JLCWBGaGv5wEKgjAIvxIYA0JWIS/lASyC8Ay/EggVgKW4S8jgcwC8Ag/EoiRgEf4S0ggqwA8w48EfCXgGf70EsgqgPba5zvfufx8Gj8xaAs9IvzHil6KyG+25fnvnlUAra4mgFf+SJGAEfPW0w8i8sJo/2vb/iIibwPONT8yqwAaOCRgPj5uBxB+I9SZBYAEjIbGeVvCbwg8uwCQgOHwOGxN+I0hVxAAEjAeIqPtCb8R2NNtqwgACTgM08QjCP9EmNe2qiQAJOA0VIPHEP5BgFuWVxMAEtgyHf7XEn5n5hUFgASch6zzOMLfCWrmZVUFgARmTtH4XoR/nKFqh8oCQAKqkZm+iPBPR9q/YXUBIIH+WbG4kvBbUN2wJwI4wOLHhjcMzaRLCf8kkCPbIIAHekhgZJK2rSX823iZXY0AztEiAbNRu9+Y8Nsz7j4BATxGhQS6x2fzhY1t+z8T2rv13l9pX+kdAYkALtNDAiNT9TRTwj+f69COCOBpfEhgaLTOFvPJP4/l1J0QwHWcSGB83Aj/OEOzHRDAbbRI4Dajp64g/Hp2LisRQB9mJNDH6fQqwr+dmfsKBNCPHAlsY8Vf+PXzCrsSAWxDjwRu8+KT/zajZa5AANtbgQSu/8sJn/zbZypsBQLQoUcCj7nxya+bpdBVCECPHwk8sCP8+jkKXYkAxvAjgcOblDz2j81R2GoEMI6+sgQI//j8hO6AAObgrygBwj9ndkJ3QQDz8FeSAOGfNzehOyGAufgrSKDV+KuI/DQXXdduvNLbhan/IgTQz6r3yswSIPy9U7CT6xCATaMySoDw28xK6K4IwA5/JgkQfrs5Cd0ZAdjizyABwm87I6G7IwB7/HuWAOG3n4/QExCAD/49SoDw+8xG6CkIwA//niRA+P3mIvQkBOCLfw8SIPy+MxF6GgLwx7+yBAi//zyEnogAYvCvKAHCHzMLoacigDj8K0mA8MfNQejJCCAU/xK/lbgR4Gf7Y+cg7HQEEIb+/uDoJ4F2Pi/2xM9ByB0ggBDsjw6NlEAEAd7qi6B+4UwEsEgj5PBfa70TkVfr3JLJnRB+E6y6TRGAjpvVquwSIPxWk6PcFwEowRkuyyoBwm84NNqtEYCWnO26bBIg/Lbzot4dAajRmS/MIgHCbz4q+gMQgJ6dx8q9S4Dwe0zJwBkIYACe09K9SoDwOw3IyDEIYISe39q9SYDw+83G0EkIYAif6+K9SIDwu47F2GEIYIyf9+rVJUD4vSdi8DwEMAgwYPmqEiD8AcMweiQCGCUYs341CRD+mDkYPhUBDCMM22AVCRD+sBEYPxgBjDOM3CFaAoQ/svsTzkYAEyAGbtH6F/WfebSyEUBg82ccjQBmUIzZIzr8x6qRQEz/p5yKAKZgdN9klfAjAffWzz0QAczl6bHbauFHAh5dNzoDARiBNdp21fAjAaOGW2+LAKwJz9t/9fAjgXm9dtsJAbihHjpoL+FHAkNt9l+MAPyZbz1xb+FHAls7HHg9AgiE33H0XsOPBDqau8IlCGCFLly+h72HHwmsO1v3d4YA1mxSlvAjgTXnCwEs3Jds4UcCiw/bwrdX7tayhh8JLDrKfAuwTmOyhx8JrDNrfAuwWC9a+N+LyMvF7svqdniByIrsxn15AtgIzODyyPC3ILavnw3qurVl+0WoEefeuq9Sf44AYtsdHf63d+U3EbwJQIEEAqCfHokA4hqwSvhPvzdHAnHzEHIyAgjBLquFHwnEzEH4qQjAvwWrhh8J+M9C+IkIwLcFq4cfCfjOQ/hpCMCvBXsJPxLwm4nwkxCATwv2Fn4k4DMX4acgAPsW7DX8SMB+NsJPQAC2Ldh7+JGA7XyE744A7FqQJfxIwG5GwndGADYtyBZ+JGAzJ+G7IoD5LcgafiQwf1bCd0QAc1uQPfxIYO68hO+GAOa1oLH8ICIv5m3ZvVPE67W8QNTdnnUvRABzelMt/Edq7W2+13MQbtql/UbkiBeXNt3kHi5GAONdqhp+JDA+O+E7IICxFlQPPxIYm5/w1QhA3wLCf86Obwf0sxS2EgHo0BP+y9yQgG6ewlYhgO3oCf91Zkhg+0yFrUAA29AT/j5eSKCPU/hVCKC/BYS/n1W7Egls4xVyNQLow074+zh9eRUS0HFzW4UAbqMm/LcZXbsCCYzxM12NAK7jJfxzxg8JzOE4fRcE8DRSwj933JDAXJ5TdkMAlzES/inj9WgTJGDDVb0rAniMjvCrx6lrIRLowuRzEQI459x4fBSR5z74z06JeKU3oMzPR0ZKoP1C0k9Rha92LgJ46Ajh95vOxroJL+pVYiRw12sEcABB+P3CfzwJCfgzf3QiAiD8kWOIBCLp333yBd9C6PF88ofiv3/64tuBoD5UfgIg/EFDd+FYngSCelFVAIQ/aOCuHIsEAnpSUQCEP2DQOo9EAp2gZl1WTQCEf9bk2O2DBOzYlv5XAMLvOFiDRyGBQYC9y6s8ARD+3olY5zok4NCLCgIg/A6DZHQEEjACe9w2uwAIv/EAOWyPBAwhZxYA4TccHOetkYAR8KwCIPxGAxO4LRIwgJ9VAO0XR7YfL/X+qvRKrzfbdl6b1/Yq8auAw1+KyG8B55oemVUAX4nInyLyrSm9880Jvw/sCAn8LSLfi8h/PiX6nZJVAI2gpwQIv9/Mej8JpA3/EaRv63xP85AA4fft6em/YFl/O5A6/BUEYP0kQPhjwu8hgfThryIAKwkQ/tjwW0qgRPgrCWC2BAj/GuG3kECZ8FcTwCwJEP61wj9TAqXCX1EAoxIg/GuGf4YEyoW/qgC0EiD8a4d/RAIlw19ZAFslQPj3EX6NBMqGv7oAeiVA+PcV/i0SKB1+BHAYlWs/LET49xn+HgmUDz8CeBjuSxIg/PsO/zUJEP47OpnfBdg6vqcSIPxb6a19/ekLRIT/pFcI4HxwmwR+yPja59r5dLm7NusvROSPjG/1aQkiAC051kEgAQEEkKCJlAABLQEEoCXHOggkIIAAEjSREiCgJYAAtORYB4EEBBBAgiZSAgS0BBCAlhzrIJCAAAJI0ERKgICWAALQkmMdBBIQQAAJmkgJENASQABacqyDQAICCCBBEykBAloCCEBLjnUQSEAAASRoIiVAQEsAAWjJsQ4CCQgggARNpAQIaAkgAC051kEgAQEEkKCJlAABLQEEoCXHOggkIIAAEjSREiCgJYAAtORYB4EEBBBAgiZSAgS0BBCAlhzrIJCAAAJI0ERKgICWAALQkmMdBBIQQAAJmkgJENASQABacqyDQAICCCBBEykBAloCCEBLjnUQSEAAASRoIiVAQEsAAWjJsQ4CCQgggARNpAQIaAkgAC051kEgAQEEkKCJlAABLQEEoCXHOggkIIAAEjSREiCgJYAAtORYB4EEBBBAgiZSAgS0BBCAlhzrIJCAAAJI0ERKgICWAALQkmMdBBIQQAAJmkgJENASQABacqyDQAICCCBBEykBAloCCEBLjnUQSEAAASRoIiVAQEsAAWjJsQ4CCQgggARNpAQIaAkgAC051kEgAQEEkKCJlAABLQEEoCXHOggkIIAAEjSREiCgJYAAtORYB4EEBP4HmA9+HxKOpA8AAAAASUVORK5CYII="
            />
          </defs>
        </svg>
      </div>
      <button type="button" className="btn btn__login">
        Login
      </button>
    </nav>
  );
}
