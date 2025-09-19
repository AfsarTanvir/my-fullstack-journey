/* 3. Mapped Types
Mapped types allow you to create new types by transforming existing ones. */
/* (i) Partial<T> -> Makes all properties optional. */

type User = { id: number; name: string; age: number };
type PartialUser = Partial<User>;
const u1: PartialUser = { id: 1 }; // ok (others optional)
console.log(u1);

function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}

const updated = updateUser(
  { id: 1, name: "Tanvir", age: 22 },
  { age: 24, name: "Afsar Tanvir" }
);
console.log(updated); // { id: 1, name: "Tanvir", age: 23 }

/* (ii) Required<T> -> Makes all properties required. */

type Settings = { darkMode?: boolean; language?: string };
type StrictSettings = Required<Settings>;
const s: StrictSettings = { darkMode: true, language: "en" }; // showes error if one them are missing
console.log(s);

function init(settings: Required<Settings>) {
  console.log(settings.darkMode, settings.language);
}

// init({ darkMode: true }); ❌ Error
init({ darkMode: true, language: "bn" });

/* (iii) Readonly<T> -> Makes all properties readonly (cannot be reassigned). */
type Config = { apiUrl: string; port: number };

const config: Readonly<Config> = {
  apiUrl: "https://api.com",
  port: 8080,
};

// config.port = 3000; // ❌ Error: readonly
console.log(config);

class App {
  private settings: Readonly<Config>;

  constructor(config: Config) {
    this.settings = config;
  }

  getConfig() {
    return this.settings;
  }
}

const app = new App({ apiUrl: "x.com", port: 80 });
console.log(app.getConfig());

/* Custom Mapped Types */
/* Example A — Make all props nullable */
type Nullable<T> = { [K in keyof T]: T[K] | null };

type UserNullable = Nullable<User>;
const nu1: UserNullable = { id: 1, name: null, age: 22 };
const nu2: UserNullable = { id: null, name: "Afsar", age: 24 }; //even though you can keep variables null, but have to assign all
console.log(nu1);
console.log(nu2);

type OnlyStringProps<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K];
};

type Example = { a: string; b: number; c: string, d: string, e: boolean };
type Result = OnlyStringProps<Example>;
const x1: Result = {a: "afsar", c: "SEC", d: "CSE"}
// { a: string; c: string }
console.log(x1);
