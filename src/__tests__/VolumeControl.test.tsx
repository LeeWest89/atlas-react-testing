import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import VolumeControl from "../components/VolumeControl";

// Test if VolumeControl renders
test("VolumeControl renders", () => {
  const { container } = render(<VolumeControl />)
  expect(container).toMatchSnapshot();
});

// Test if volume level starts at 75
test("VolumeControl renders", () => {
  const inputElement = screen.getByRole('slider') as HTMLInputElement;
  expect(inputElement.value).toBe('75');
});

// Test if volume level changes on slide
test("VolumeControl updates", () => {
  const inputElement = screen.getByRole('slider') as HTMLInputElement;
  fireEvent.change(inputElement, { target: { value: '25' } });
  expect(inputElement.value).toBe('25');
});

// Test if volume level changes on slide outside slider min range
test("VolumeControl updates even outside min", () => {
  const inputElement = screen.getByRole('slider') as HTMLInputElement;
  fireEvent.change(inputElement, { target: { value: '-25' } });
  expect(inputElement.value).toBe('0');
});

// Test if volume level changes on slide outside slider max range
test("VolumeControl updates even outside max", () => {
  const inputElement = screen.getByRole('slider') as HTMLInputElement;
  fireEvent.change(inputElement, { target: { value: '123' } });
  expect(inputElement.value).toBe('100');
});
