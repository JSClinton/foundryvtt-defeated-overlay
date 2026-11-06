// Force the defeated status to render as a full-token overlay.
Hooks.on("preCreateActiveEffect", (effect) => {
  if (effect.statuses?.has(CONFIG.specialStatusEffects.DEFEATED)) {
    effect.updateSource({ "flags.core.overlay": true });
  }
});
