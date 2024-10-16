// src/theme/tokens/shadows.ts
export const shadows = {
    elevation: {
      none: { value: "none" },
      xs: { value: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" },
      sm: { value: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)" },
      md: { value: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" },
      lg: { value: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" },
      xl: { value: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" },
      "2xl": { value: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" },
    },
    inset: {
      sm: { value: "inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)" },
      md: { value: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)" },
      lg: { value: "inset 0 4px 6px -1px rgba(0, 0, 0, 0.1)" },
    },
    focus: {
      default: { value: "0 0 0 3px rgba(66, 153, 225, 0.6)" },
      error: { value: "0 0 0 3px rgba(245, 101, 101, 0.6)" },
      success: { value: "0 0 0 3px rgba(72, 187, 120, 0.6)" },
    },
    directional: {
      top: { value: "0 -4px 6px -1px rgba(0, 0, 0, 0.1)" },
      right: { value: "4px 0 6px -1px rgba(0, 0, 0, 0.1)" },
      bottom: { value: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" },
      left: { value: "-4px 0 6px -1px rgba(0, 0, 0, 0.1)" },
    },
  };
  
  export const createCustomShadow = (
    { x = "0", y = "0", blur = "0", spread = "0", color = "rgba(0, 0, 0, 0.1)" }:
    { x?: string; y?: string; blur?: string; spread?: string; color?: string }
  ) => {
    return { value: `${x} ${y} ${blur} ${spread} ${color}` };
  };
  
  // Usage examples:
  // const customShadow = createCustomShadow({ y: "5px", blur: "10px", color: "rgba(0, 0, 0, 0.2)" });
  // const subtleShadow = shadows.elevation.xs.value;
  // const popupShadow = shadows.elevation.lg.value;