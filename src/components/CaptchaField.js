import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import {
  drawCaptchaOnCanvas,
  generateCaptchaText,
  validateCaptchaInput,
} from '../utils/captcha';

const CaptchaField = forwardRef(({
  value,
  onChange,
  onRefresh,
  inputId = 'captcha-input',
  disabled = false,
}, ref) => {
  const canvasRef = useRef(null);
  const answerRef = useRef('');
  const onRefreshRef = useRef(onRefresh);

  useEffect(() => {
    onRefreshRef.current = onRefresh;
  }, [onRefresh]);

  const generateAndDraw = useCallback(() => {
    const nextText = generateCaptchaText();
    answerRef.current = nextText;
    drawCaptchaOnCanvas(canvasRef.current, nextText);
  }, []);

  const refreshCaptcha = useCallback(() => {
    generateAndDraw();
    onRefreshRef.current?.();
  }, [generateAndDraw]);

  useEffect(() => {
    generateAndDraw();
  }, [generateAndDraw]);

  useImperativeHandle(ref, () => ({
    validate: (userInput) => validateCaptchaInput(answerRef.current, userInput),
    refresh: refreshCaptcha,
  }), [refreshCaptcha]);

  return (
    <div className="mb-4">
      <label className="form-label fw-bold captcha-field-label mb-2" htmlFor={inputId}>
        <span className="captcha-label-main">Security Verification</span>
        <span className="captcha-label-suffix">(CAPTCHA) *</span>
      </label>
      <div className="captcha-controls-row d-flex align-items-center gap-2 gap-md-3 mb-3">
        <canvas
          ref={canvasRef}
          width={180}
          height={56}
          role="img"
          aria-label="CAPTCHA challenge"
          className="rounded-3 border captcha-canvas"
          style={{
            backgroundColor: '#f8fafc',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        />
        <button
          type="button"
          className="btn btn-outline-primary rounded-pill captcha-refresh-btn px-3 py-2"
          onClick={refreshCaptcha}
          disabled={disabled}
          aria-label="Refresh CAPTCHA"
          title="Get new CAPTCHA"
        >
          <FontAwesomeIcon icon={faRotateRight} className="me-2" />
          New CAPTCHA
        </button>
      </div>
      <input
        id={inputId}
        name="captcha"
        type="text"
        value={value}
        onChange={onChange}
        className="form-control rounded-pill py-2"
        placeholder="Enter CAPTCHA"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="characters"
        spellCheck={false}
        maxLength={8}
        disabled={disabled}
        aria-required="true"
      />
    </div>
  );
});

CaptchaField.displayName = 'CaptchaField';

export default CaptchaField;
