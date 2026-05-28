import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, EyeOff, Dumbbell } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login — Barbell Fitness" }] }),
  component: () => <AuthPage mode="login" />,
});

export function AuthPage({ mode }: { mode: "login" | "signup" }) {
  const [show, setShow] = useState(false);
  const isLogin = mode === "login";
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/60 to-primary/30" />
        <div className="absolute inset-0 flex flex-col justify-end p-12">
          <Dumbbell className="w-10 h-10 text-primary" />
          <h2 className="font-display text-5xl mt-4 tracking-wider">Welcome To <br /><span className="text-primary">Barbell Fitness</span></h2>
          <p className="mt-3 text-muted-foreground max-w-sm">Your strongest self is one workout away.</p>
        </div>
      </div>

      <div className="flex items-center justify-center p-6 md:p-12 pt-28">
        <form className="w-full max-w-md space-y-5" onSubmit={(e) => e.preventDefault()}>
          <p className="eyebrow">{isLogin ? "Member Login" : "New Member"}</p>
          <h1 className="text-4xl md:text-5xl tracking-wider">{isLogin ? "Welcome Back" : "Create Account"}</h1>

          {!isLogin && <Input label="Full Name" />}
          <Input label="Email" type="email" />
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Password</label>
            <div className="relative">
              <input required type={show ? "text" : "password"} className="w-full bg-input border border-border rounded px-3 py-2.5 pr-10 focus:outline-none focus:border-primary" />
              <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                {show ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button className="btn btn-primary w-full">{isLogin ? "Login" : "Create Account"}</button>

          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="h-px flex-1 bg-border" /> OR <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button type="button" className="btn btn-ghost !text-xs">Google</button>
            <button type="button" className="btn btn-ghost !text-xs">Facebook</button>
          </div>

          <p className="text-sm text-center text-muted-foreground">
            {isLogin ? "New here?" : "Already a member?"}{" "}
            <Link to={isLogin ? "/signup" : "/login"} className="text-primary hover:underline">
              {isLogin ? "Create account" : "Login"}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

function Input({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input required type={type} className="w-full bg-input border border-border rounded px-3 py-2.5 focus:outline-none focus:border-primary" />
    </div>
  );
}
