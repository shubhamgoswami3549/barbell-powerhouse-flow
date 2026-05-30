import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Eye, EyeOff, Dumbbell, Loader2 } from "lucide-react";
import { authApi, tokenStore } from "@/services/api";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login — Barbell Fitness" }] }),
  component: () => <AuthPage mode="login" />,
});

export function AuthPage({ mode }: { mode: "login" | "signup" }) {
  const isLogin = mode === "login";
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = isLogin
        ? await authApi.login({ email: form.email, password: form.password })
        : await authApi.register(form);
      tokenStore.set(res.token);
      navigate({ to: "/" });
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Something went wrong. Is the backend running?"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/60 to-primary/30" />
        <div className="absolute inset-0 flex flex-col justify-end p-12">
          <Dumbbell className="w-10 h-10 text-primary" />
          <h2 className="font-display text-5xl mt-4 tracking-wider">
            Welcome To <br />
            <span className="text-primary">Barbell Fitness</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-sm">
            Your strongest self is one workout away.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center p-6 md:p-12 pt-28">
        <form className="w-full max-w-md space-y-5" onSubmit={onSubmit}>
          <p className="eyebrow">{isLogin ? "Member Login" : "New Member"}</p>
          <h1 className="text-4xl md:text-5xl tracking-wider">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>

          {!isLogin && (
            <Field label="Full Name" value={form.name} onChange={update("name")} />
          )}
          <Field
            label="Email"
            type="email"
            value={form.email}
            onChange={update("email")}
          />

          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Password
            </label>
            <div className="relative">
              <input
                required
                minLength={6}
                value={form.password}
                onChange={update("password")}
                type={show ? "text" : "password"}
                className="w-full bg-input border border-border rounded px-3 py-2.5 pr-10 focus:outline-none focus:border-primary"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {show ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="text-sm text-destructive bg-destructive/10 border border-destructive/30 rounded px-3 py-2">
              {error}
            </div>
          )}

          <button disabled={loading} className="btn btn-primary w-full">
            {loading ? (
              <span className="inline-flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                {isLogin ? "Logging in..." : "Creating..."}
              </span>
            ) : isLogin ? (
              "Login"
            ) : (
              "Create Account"
            )}
          </button>

          <p className="text-sm text-center text-muted-foreground">
            {isLogin ? "New here?" : "Already a member?"}{" "}
            <Link
              to={isLogin ? "/signup" : "/login"}
              className="text-primary hover:underline"
            >
              {isLogin ? "Create account" : "Login"}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </label>
      <input
        required
        type={type}
        value={value}
        onChange={onChange}
        className="w-full bg-input border border-border rounded px-3 py-2.5 focus:outline-none focus:border-primary"
      />
    </div>
  );
}
