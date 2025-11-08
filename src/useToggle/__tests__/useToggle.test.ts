import { renderHook, act } from '@testing-library/react';
import useToggle from '../index';

describe('useToggle', () => {
  it('should initialize with false by default', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current[0]).toBe(false);
  });

  it('should initialize with provided initial value', () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current[0]).toBe(true);
  });

  it('should toggle state from false to true', () => {
    const { result } = renderHook(() => useToggle(false));
    
    expect(result.current[0]).toBe(false);
    
    act(() => {
      result.current[1]();
    });
    
    expect(result.current[0]).toBe(true);
  });

  it('should toggle state from true to false', () => {
    const { result } = renderHook(() => useToggle(true));
    
    expect(result.current[0]).toBe(true);
    
    act(() => {
      result.current[1]();
    });
    
    expect(result.current[0]).toBe(false);
  });

  it('should toggle multiple times correctly', () => {
    const { result } = renderHook(() => useToggle(false));
    
    expect(result.current[0]).toBe(false);
    
    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe(true);
    
    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe(false);
    
    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe(true);
  });

  it('should return a stable toggle function', () => {
    const { result, rerender } = renderHook(() => useToggle());
    const firstToggle = result.current[1];
    
    rerender();
    
    expect(result.current[1]).toBe(firstToggle);
  });
});

