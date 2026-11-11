import React, { useCallback } from "react";
import { set, unset } from "sanity";
import type { StringInputProps } from "sanity";
import { TextInput } from "@sanity/ui";

export function SatoPlayerInput(props: StringInputProps) {
  const { value, onChange, elementProps, readOnly } = props;

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.currentTarget.value;
      onChange(nextValue ? set(nextValue) : unset());
    },
    [onChange],
  );

  return React.createElement(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "100%",
      },
    },
    React.createElement(TextInput, {
      ...elementProps,
      type: "text",
      style: { width: "100%", minWidth: 0, boxSizing: "border-box" },
      value: value ?? "",
      placeholder: "Enter Sato Player Video Embed URL",
      onChange: handleChange,
      readOnly: readOnly,
    }),
    // value
    //   ? React.createElement("iframe", {
    //       // src: `https://api.satoplayer.com/players/embed/${value}`,
    //       src: `https://api.satoplayer.com/players/embed/${encodeURIComponent(value)}`,
    //       title: "Sato Player",
    //       width: "100%",
    //       height: "400",
    //       allow: "autoplay; fullscreen",
    //       allowFullScreen: true,
    //       style: {
    //         display: "block",
    //         width: "100%",
    //         border: "0",
    //       },
    //     })
    //   : null,
  );
}
