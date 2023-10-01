import { useEffect, useState } from 'react';

export function useCache<T>(
  key: string,
  initialValue: T,
  storage: 'local' | 'session' = 'local',
): [T, (value: T) => void] {
  // 获取初始值
  const readValue = (): T => {
    if (!!key) {
      const item =
        storage === 'local'
          ? window.localStorage.getItem(key)
          : window.sessionStorage.getItem(key);
      if (item) {
        return JSON.parse(item);
      }
    }
    // 如果传入的初始值是函数，则调用该函数获取初始值，否则直接返回初始值
    return initialValue instanceof Function ? initialValue() : initialValue;
  };

  // 使用useState的惰性初始化
  const [storedValue, setStoredValue] = useState<T>(readValue);

  // 返回一个包装过的设置函数，以在新值设置时更新Storage
  const setValue = (value: T) => {
    // 保存状态
    setStoredValue(value);

    // 保存到Storage
    if (!!value) {
      storage === 'local'
        ? window.localStorage.setItem(key, JSON.stringify(value))
        : window.sessionStorage.setItem(key, JSON.stringify(value));
    }
  };

  // 使用useEffect来监听key或initialValue的变化
  useEffect(() => {
    setStoredValue(readValue());
  }, [key]);

  return [storedValue, setValue];
}
