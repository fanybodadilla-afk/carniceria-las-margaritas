import { state } from './state.js';

export const initAudioContext = () => {
  if (!state.audioContext) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      try {
        state.audioContext = new AudioCtx();
      } catch (e) {
        console.warn("Failed to create AudioContext:", e);
      }
    }
  }
};

export const playChimeSound = () => {
  try {
    initAudioContext();
    if (!state.audioContext) return;
    
    // Si está pausado por políticas del navegador, reanudar
    if (state.audioContext.state === 'suspended') {
      state.audioContext.resume();
    }
    
    const ctx = state.audioContext;
    const now = ctx.currentTime;
    
    // Nota 1 (Campana alta y resonante - C6)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(1046.50, now);
    gain1.gain.setValueAtTime(0, now);
    gain1.gain.linearRampToValueAtTime(0.15, now + 0.05);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
    
    // Nota 2 (Armónico afinado para calidez - E6)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(1318.51, now + 0.12);
    gain2.gain.setValueAtTime(0, now + 0.12);
    gain2.gain.linearRampToValueAtTime(0.1, now + 0.17);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.9);
    
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    
    osc1.start(now);
    osc1.stop(now + 0.8);
    osc2.start(now + 0.12);
    osc2.stop(now + 1.0);
  } catch (e) {
    console.warn("La reproducción de sonido no fue permitida por restricciones de interacción.", e);
  }
};

export const triggerNotificationSoundShort = () => {
  try {
    initAudioContext();
    if (!state.audioContext) return;
    const ctx = state.audioContext;
    const now = ctx.currentTime;
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, now); // A5 (La)
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.2);
  } catch (e) {}
};
